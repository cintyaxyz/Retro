import React, { useState, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import RightSidebar from './components/RightSidebar';
import SearchAndFilters from './components/SearchAndFilters';
import CourseCard from './components/CourseCard';
import CourseModal from './components/CourseModal';
import UpgradeModal from './components/UpgradeModal';
import { 
  recentSearches, 
  popularClasses, 
  newestClasses, 
  latestLearnedHero,
  progressCourses
} from './data/coursesData';
import { Menu, Sparkles, Folder, Calendar, Heart, Settings, SlidersHorizontal, ArrowRight } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [wishlist, setWishlist] = useState(['recent-1', 'popular-1']);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [upgradeModalOpen, setUpgradeModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle wishlist item
  const toggleWishlist = (courseId) => {
    setWishlist((prev) => 
      prev.includes(courseId) ? prev.filter(id => id !== courseId) : [...prev, courseId]
    );
  };

  // Filter helper
  const filterList = (list) => {
    return list.filter(item => {
      const matchesSearch = 
        !searchQuery || 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.author.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        selectedCategory === 'all' || 
        item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  };

  const filteredRecent = useMemo(() => filterList(recentSearches), [searchQuery, selectedCategory]);
  const filteredPopular = useMemo(() => filterList(popularClasses), [searchQuery, selectedCategory]);
  const filteredNewest = useMemo(() => filterList(newestClasses), [searchQuery, selectedCategory]);

  const allFilteredCourses = useMemo(() => {
    const combined = [...recentSearches, ...popularClasses, ...newestClasses];
    return filterList(combined);
  }, [searchQuery, selectedCategory]);

  const wishlistedCourses = useMemo(() => {
    const combined = [...recentSearches, ...popularClasses, ...newestClasses];
    return combined.filter(c => wishlist.includes(c.id));
  }, [wishlist]);

  const handleResetSearch = () => {
    setSearchQuery('');
    setSelectedCategory('all');
  };

  return (
    <div className="min-h-screen bg-[#FAF5EA] text-[#1C1E21] font-sans flex justify-center selection:bg-[#FDE047] selection:text-black">
      {/* Outer Dashboard Wrapper matching the reference container */}
      <div className="w-full max-w-[1600px] flex flex-col lg:flex-row min-h-screen bg-[#FAF5EA] border-x border-[#E5DFCE] relative">
        
        {/* Mobile Header Bar */}
        <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-[#FAF5EA] border-b border-[#E5DFCE] sticky top-0 z-30">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 rounded-xl border border-[#1C1E21] bg-white retro-shadow-sm"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5 text-[#1C1E21]" />
          </button>

          <span className="font-serif font-black text-2xl text-[#1C1E21] tracking-tight">
            Retro.
          </span>

          <button
            onClick={() => setUpgradeModalOpen(true)}
            className="px-3 py-1.5 rounded-full bg-[#1C1E21] text-white text-xs font-bold flex items-center gap-1"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FDE047]" />
            <span>PRO</span>
          </button>
        </div>

        {/* 1. Left Sidebar Navigation */}
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          onOpenUpgrade={() => setUpgradeModalOpen(true)}
          wishlistCount={wishlist.length}
          mobileOpen={mobileMenuOpen}
          setMobileOpen={setMobileMenuOpen}
        />

        {/* 2. Middle Content Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-7 min-w-0 flex flex-col gap-6 lg:border-x border-[#E5DFCE]">
          {/* Top Search Bar & Category Filter Pills */}
          <SearchAndFilters 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            onResetSearch={handleResetSearch}
          />

          {/* ACTIVE TAB: Overview (Exact match to Referensi.png) */}
          {activeTab === 'overview' && (
            <div className="space-y-7">
              {/* If user is filtering or searching, show results indicator */}
              {(searchQuery || selectedCategory !== 'all') && (
                <div className="flex items-center justify-between p-3 bg-white rounded-2xl border-2 border-[#1C1E21] retro-shadow-sm">
                  <div className="text-xs font-bold text-[#1C1E21] flex items-center gap-2">
                    <SlidersHorizontal className="w-4 h-4 text-[#D97706]" />
                    <span>
                      Hasil pencarian: {allFilteredCourses.length} kelas ditemukan {searchQuery && `untuk "${searchQuery}"`}
                    </span>
                  </div>
                  <button 
                    onClick={handleResetSearch}
                    className="text-xs font-bold underline text-[#5B616E] hover:text-[#1C1E21] cursor-pointer"
                  >
                    Reset Filter
                  </button>
                </div>
              )}

              {/* Section 1: Recent Search */}
              <section>
                <div className="flex items-center justify-between mb-3.5">
                  <h3 className="font-serif font-black text-xl text-[#1C1E21] tracking-tight">
                    Recent Search
                  </h3>
                  <button 
                    onClick={() => setActiveTab('courses')}
                    className="text-xs font-bold text-[#5B616E] hover:text-[#1C1E21] underline decoration-2 underline-offset-2 transition-colors cursor-pointer"
                  >
                    See all
                  </button>
                </div>

                {filteredRecent.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
                    {filteredRecent.map((course) => (
                      <CourseCard 
                        key={course.id}
                        course={course}
                        onSelectCourse={setSelectedCourse}
                        isWishlisted={wishlist.includes(course.id)}
                        onToggleWishlist={toggleWishlist}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="p-6 text-center bg-white/70 rounded-2xl border border-dashed border-[#1C1E21]/30 text-xs text-[#5B616E]">
                    Tidak ada kelas Recent Search yang cocok dengan kriteria pencarian.
                  </div>
                )}
              </section>

              {/* Section 2: Popular Class */}
              <section>
                <div className="flex items-center justify-between mb-3.5">
                  <h3 className="font-serif font-black text-xl text-[#1C1E21] tracking-tight">
                    Popular Class
                  </h3>
                  <button 
                    onClick={() => setActiveTab('courses')}
                    className="text-xs font-bold text-[#5B616E] hover:text-[#1C1E21] underline decoration-2 underline-offset-2 transition-colors cursor-pointer"
                  >
                    See all
                  </button>
                </div>

                {filteredPopular.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5">
                    {filteredPopular.map((course, idx) => {
                      // First item gets 7 cols, second gets 5 cols to match the wide/compact layout
                      const colSpan = idx === 0 && filteredPopular.length > 1 ? 'md:col-span-7' : 'md:col-span-5';
                      return (
                        <div key={course.id} className={colSpan}>
                          <CourseCard 
                            course={course}
                            onSelectCourse={setSelectedCourse}
                            isWishlisted={wishlist.includes(course.id)}
                            onToggleWishlist={toggleWishlist}
                            isWide={idx === 0}
                          />
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="p-6 text-center bg-white/70 rounded-2xl border border-dashed border-[#1C1E21]/30 text-xs text-[#5B616E]">
                    Tidak ada kelas Popular Class yang cocok dengan kriteria pencarian.
                  </div>
                )}
              </section>

              {/* Section 3: Newest Class */}
              <section>
                <div className="flex items-center justify-between mb-3.5">
                  <h3 className="font-serif font-black text-xl text-[#1C1E21] tracking-tight">
                    Newest Class
                  </h3>
                  <button 
                    onClick={() => setActiveTab('courses')}
                    className="text-xs font-bold text-[#5B616E] hover:text-[#1C1E21] underline decoration-2 underline-offset-2 transition-colors cursor-pointer"
                  >
                    See all
                  </button>
                </div>

                {filteredNewest.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
                    {filteredNewest.map((course) => (
                      <CourseCard 
                        key={course.id}
                        course={course}
                        onSelectCourse={setSelectedCourse}
                        isWishlisted={wishlist.includes(course.id)}
                        onToggleWishlist={toggleWishlist}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="p-6 text-center bg-white/70 rounded-2xl border border-dashed border-[#1C1E21]/30 text-xs text-[#5B616E]">
                    Tidak ada kelas Newest Class yang cocok dengan kriteria pencarian.
                  </div>
                )}
              </section>
            </div>
          )}

          {/* TAB: All Courses */}
          {activeTab === 'courses' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-serif font-black text-2xl text-[#1C1E21]">Katalog Seluruh Kelas</h2>
                  <p className="text-xs text-[#5B616E]">Jelajahi semua materi kreatif dari mentor kelas dunia</p>
                </div>
                <button 
                  onClick={() => setActiveTab('overview')}
                  className="text-xs font-bold px-3 py-1.5 rounded-full border border-[#1C1E21] bg-white hover:bg-[#F2ECE0]"
                >
                  Kembali ke Overview
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {allFilteredCourses.map((course) => (
                  <CourseCard 
                    key={course.id}
                    course={course}
                    onSelectCourse={setSelectedCourse}
                    isWishlisted={wishlist.includes(course.id)}
                    onToggleWishlist={toggleWishlist}
                  />
                ))}
              </div>
            </div>
          )}

          {/* TAB: Schedule */}
          {activeTab === 'schedule' && (
            <div className="space-y-6">
              <div>
                <h2 className="font-serif font-black text-2xl text-[#1C1E21]">Jadwal Belajar Mingguan</h2>
                <p className="text-xs text-[#5B616E]">Atur ritme latihan kreatifmu bersama komunitas</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-white rounded-3xl border-2 border-[#1C1E21] retro-shadow-sm space-y-4">
                  <h4 className="font-serif font-bold text-base text-[#1C1E21] flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#2563EB]" />
                    <span>Sesi Live Mendatang</span>
                  </h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-[#FAF5EA] rounded-2xl border border-[#1C1E21]/20 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-xs text-[#1C1E21]">Live Crit: Character Design</div>
                        <div className="text-[11px] text-[#5B616E]">Kamis, 19:30 WIB • Bersama Lyndles Torney</div>
                      </div>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#FEE78A] border border-[#1C1E21]">Live</span>
                    </div>

                    <div className="p-3 bg-[#FAF5EA] rounded-2xl border border-[#1C1E21]/20 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-xs text-[#1C1E21]">Procreate 5X Gestures & Shortcuts</div>
                        <div className="text-[11px] text-[#5B616E]">Sabtu, 14:00 WIB • Bersama Brokito Remest</div>
                      </div>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#CEF0E5] border border-[#1C1E21]">Workshop</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-white rounded-3xl border-2 border-[#1C1E21] retro-shadow-sm space-y-3">
                  <h4 className="font-serif font-bold text-base text-[#1C1E21]">Target Mingguan (Streak: 4 Hari 🔥)</h4>
                  <p className="text-xs text-[#5B616E]">Kamu telah menyelesaikan 3 dari 5 jam target latihan minggu ini!</p>
                  <div className="w-full h-3 rounded-full bg-[#FAF5EA] border border-[#1C1E21] overflow-hidden">
                    <div className="h-full bg-[#D97706] rounded-full" style={{ width: '60%' }} />
                  </div>
                  <div className="flex justify-between text-[11px] text-[#828894] font-medium">
                    <span>3 Jam Selesai</span>
                    <span>Target: 5 Jam</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB: Wishlist */}
          {activeTab === 'wishlist' && (
            <div className="space-y-6">
              <div>
                <h2 className="font-serif font-black text-2xl text-[#1C1E21]">Kelas Favoritmu</h2>
                <p className="text-xs text-[#5B616E]">Simpan kelas yang ingin kamu pelajari nanti</p>
              </div>

              {wishlistedCourses.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {wishlistedCourses.map((course) => (
                    <CourseCard 
                      key={course.id}
                      course={course}
                      onSelectCourse={setSelectedCourse}
                      isWishlisted={true}
                      onToggleWishlist={toggleWishlist}
                    />
                  ))}
                </div>
              ) : (
                <div className="p-10 text-center bg-white rounded-3xl border-2 border-[#1C1E21] space-y-3">
                  <Heart className="w-10 h-10 text-[#5B616E] mx-auto stroke-1" />
                  <h4 className="font-serif font-bold text-lg text-[#1C1E21]">Belum ada kelas tersimpan</h4>
                  <p className="text-xs text-[#5B616E]">Klik ikon hati di sudut kartu kelas mana saja untuk menyimpannya di sini.</p>
                  <button 
                    onClick={() => setActiveTab('overview')}
                    className="mt-2 px-4 py-2 rounded-full bg-[#1C1E21] text-white font-bold text-xs"
                  >
                    Jelajahi Kelas
                  </button>
                </div>
              )}
            </div>
          )}

          {/* TAB: Setting */}
          {activeTab === 'setting' && (
            <div className="space-y-6 max-w-xl">
              <div>
                <h2 className="font-serif font-black text-2xl text-[#1C1E21]">Pengaturan Akun</h2>
                <p className="text-xs text-[#5B616E]">Kelola preferensi dan profil belajarmu</p>
              </div>

              <div className="p-6 bg-white rounded-3xl border-2 border-[#1C1E21] retro-shadow-sm space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#1C1E21] mb-1">Nama Pengguna</label>
                  <input 
                    type="text" 
                    defaultValue="Basith Ali" 
                    className="w-full px-4 py-2 rounded-xl border-2 border-[#1C1E21] text-xs font-medium focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1C1E21] mb-1">Status Bio</label>
                  <input 
                    type="text" 
                    defaultValue="Your doing great, keep practicing" 
                    className="w-full px-4 py-2 rounded-xl border-2 border-[#1C1E21] text-xs font-medium focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#1C1E21]">Notifikasi Email Mingguan</div>
                    <div className="text-[11px] text-[#5B616E]">Dapatkan tips ilustrasi & rekapan progres</div>
                  </div>
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#1C1E21]" />
                </div>

                <button 
                  onClick={() => alert('Pengaturan berhasil disimpan!')}
                  className="w-full py-2.5 rounded-full bg-[#1C1E21] text-white font-bold text-xs retro-shadow-sm hover:retro-shadow-hover transition-all"
                >
                  Simpan Perubahan
                </button>
              </div>
            </div>
          )}
        </main>

        {/* 3. Right Sidebar */}
        <RightSidebar 
          onSelectCourse={setSelectedCourse}
          onSelectProgressCourse={(prog) => {
            setSelectedCourse({
              id: prog.id,
              title: prog.title,
              author: prog.instructor,
              authorRole: 'Master Instructor',
              authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
              image: prog.image || '/images/retro_camera.jpg',
              description: `Lanjutkan pelajaran di modul ${prog.part}. Progress kamu saat ini telah mencapai ${prog.progress}%.`,
              badge: prog.part,
              badgeType: 'pink',
              rating: 4.9,
              students: '2.5k',
              duration: '3h 10m',
              lessons: 12
            });
          }}
        />
      </div>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <CourseModal 
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
          isWishlisted={wishlist.includes(selectedCourse.id)}
          onToggleWishlist={toggleWishlist}
        />
      )}

      {/* Upgrade to PRO Modal */}
      <UpgradeModal 
        isOpen={upgradeModalOpen}
        onClose={() => setUpgradeModalOpen(false)}
      />
    </div>
  );
}
