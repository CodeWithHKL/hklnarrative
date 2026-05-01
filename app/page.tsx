"use client";
import { useState, useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, SlidersHorizontal, Newspaper, ChevronDown } from "lucide-react";
import { articles, categories, Category } from "@/lib/data";
import NewsCard from "@/components/NewsCard";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(20);

  // --- THE SORTING & FILTERING ENGINE ---
  const filteredAndSorted = useMemo(() => {
    return articles
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .filter(a => (activeCategory === "All" || a.category === activeCategory))
      .filter(a => 
        a.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        a.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
  }, [activeCategory, searchQuery]);

  const displayed = filteredAndSorted.slice(0, visibleCount);

  // Reset count when filters change to keep things clean
  useEffect(() => {
    setVisibleCount(20);
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-black selection:bg-black selection:text-white dark:bg-black dark:text-white">
      
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-black/[0.05] bg-white/70 backdrop-blur-xl dark:border-white/[0.05] dark:bg-black/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 h-16">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-black dark:bg-white p-1 rounded-lg">
              <Newspaper className="h-4 w-4 text-white dark:text-black" />
            </div>
            <span className="font-bold tracking-tighter text-lg uppercase">HKL Narrative</span>
          </div>
          <div className="flex items-center gap-6 text-sm font-medium text-zinc-500">
            <span className="hidden sm:block">2026 Edition</span>
            <a 
              href="https://github.com/CodeWithHKL" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-black text-white dark:bg-white dark:text-black px-4 py-1.5 rounded-full text-xs"
            >
              HKL Channel
            </a>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-6 py-12">
        <header className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold tracking-tighter sm:text-8xl"
          >
            The HKL <br /> <span className="text-zinc-400">Narrative.</span>
          </motion.h1>
        </header>

        {/* CONTROLS */}
        <div className="sticky top-20 z-40 mb-8 flex flex-col gap-4 rounded-3xl border border-black/[0.05] bg-white/50 p-4 backdrop-blur-md dark:border-white/[0.05] dark:bg-zinc-900/50 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search by keyword..."
              className="h-11 w-full rounded-2xl bg-black/[0.03] pl-11 pr-4 text-sm outline-none focus:ring-2 focus:ring-black/5 dark:bg-white/[0.03]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
            <SlidersHorizontal className="h-4 w-4 text-zinc-400 mr-2 shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                  activeCategory === cat 
                  ? "bg-black text-white dark:bg-white dark:text-black" 
                  : "hover:bg-black/5 dark:hover:bg-white/5 text-zinc-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* POST COUNT INDICATOR */}
        <div className="mb-6 flex items-center justify-between px-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-zinc-400" />
            <span>Showing {displayed.length} of {filteredAndSorted.length} Stories</span>
          </div>
          {searchQuery && (
            <span>Results for "{searchQuery}"</span>
          )}
        </div>

        {/* GRID FEED */}
        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {displayed.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* LOAD MORE BUTTON */}
        <div className="flex flex-col items-center justify-center py-24">
          {visibleCount < filteredAndSorted.length ? (
            <button
              onClick={() => setVisibleCount(prev => prev + 12)}
              className="group flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-8 py-4 text-sm font-bold shadow-sm transition-all hover:bg-black hover:text-white dark:border-white/[0.08] dark:bg-zinc-950 dark:hover:bg-white dark:hover:text-black"
            >
              <span>Load More Stories</span>
              <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </button>
          ) : (
            <p className="text-sm font-medium text-zinc-400">You've reached the end of the narrative.</p>
          )}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-black/[0.05] py-20 dark:border-white/[0.05] bg-white dark:bg-black">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between gap-12 text-sm">
          <div className="max-w-xs">
            <div className="font-bold tracking-tighter mb-2 italic">HKL NARRATIVE</div>
            <p className="text-zinc-500">This is not a propaganda, this is my own curated news for best reads.</p>
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col gap-2">
              <span className="font-bold">Project</span>
              <a href="#" className="text-zinc-500 hover:text-black">Architecture</a>
              <a href="#" className="text-zinc-500 hover:text-black">Source</a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-bold">Legal</span>
              <a href="#" className="text-zinc-500 hover:text-black">Fair Use</a>
              <a href="#" className="text-zinc-500 hover:text-black">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}