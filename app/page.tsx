"use client";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, SlidersHorizontal, Newspaper } from "lucide-react";
import { articles, categories, Category } from "@/lib/data";
import NewsCard from "@/components/NewsCard";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);
  const observerTarget = useRef(null);

  const filtered = articles.filter(a => 
    (activeCategory === "All" || a.category === activeCategory) &&
    (a.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
     a.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const displayed = filtered.slice(0, visibleCount);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < filtered.length) {
          setVisibleCount(prev => prev + 8);
        }
      },
      { threshold: 0.1, rootMargin: "100px" }
    );
    if (observerTarget.current) observer.observe(observerTarget.current);
    return () => observer.disconnect();
  }, [visibleCount, filtered.length]);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-black selection:bg-black selection:text-white dark:bg-black dark:text-white">
      
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-black/[0.05] bg-white/70 backdrop-blur-xl dark:border-white/[0.05] dark:bg-black/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 h-16">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-black dark:bg-white p-1 rounded-lg">
              <Newspaper className="h-4 w-4 text-white dark:text-black" />
            </div>
            <span className="font-bold tracking-tighter text-lg">GAZETTE</span>
          </div>
          <div className="flex items-center gap-6 text-sm font-medium text-zinc-500">
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Latest</a>
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Popular</a>
            <div className="h-4 w-[1px] bg-zinc-200 dark:bg-zinc-800" />
            <button className="bg-black text-white dark:bg-white dark:text-black px-4 py-1.5 rounded-full text-xs">Subscribe</button>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-6 py-12">
        {/* HERO SECTION */}
        <header className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl font-bold tracking-tighter sm:text-8xl"
          >
            The Daily <br /> <span className="text-zinc-400">Intelligence.</span>
          </motion.h1>
        </header>

        {/* CONTROLS */}
        <div className="sticky top-20 z-40 mb-12 flex flex-col gap-4 rounded-3xl border border-black/[0.05] bg-white/50 p-4 backdrop-blur-md dark:border-white/[0.05] dark:bg-zinc-900/50 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search the archives..."
              className="h-11 w-full rounded-2xl bg-black/[0.03] pl-11 pr-4 text-sm outline-none focus:ring-2 focus:ring-black/5 dark:bg-white/[0.03]"
              onChange={(e) => { setSearchQuery(e.target.value); setVisibleCount(12); }}
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
            <SlidersHorizontal className="h-4 w-4 text-zinc-400 mr-2 shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setVisibleCount(12); }}
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

        {/* GRID FEED */}
        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {displayed.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* LOADING ANCHOR */}
        <div ref={observerTarget} className="flex justify-center py-20">
          {visibleCount < filtered.length && (
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-zinc-200 border-t-black dark:border-zinc-800 dark:border-t-white" />
          )}
        </div>
      </main>

      {/* MINIMAL FOOTER */}
      <footer className="border-t border-black/[0.05] py-20 dark:border-white/[0.05]">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between gap-12">
          <div className="max-w-sm">
            <div className="font-bold tracking-tighter mb-4 text-xl">GAZETTE.</div>
            <p className="text-sm text-zinc-500 leading-relaxed">
              A meticulously curated personal news system designed for clarity and speed. Built with Next.js 15.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3 text-sm">
            <div className="flex flex-col gap-3">
              <span className="font-bold">System</span>
              <a href="#" className="text-zinc-500">Changelog</a>
              <a href="#" className="text-zinc-500">Security</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-bold">Social</span>
              <a href="#" className="text-zinc-500">Twitter</a>
              <a href="#" className="text-zinc-500">Github</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}