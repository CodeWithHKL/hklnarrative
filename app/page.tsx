"use client";

import { useState } from "react";
import Image from "next/image";
import { articles, categories, Category } from "@/lib/data";
import NewsCard from "@/components/NewsCard";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Logic for filtering
  const filteredArticles = articles.filter((article) => {
    const matchesCategory = activeCategory === "All" || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      {/* --- HEADER --- */}
      <header className="sticky top-0 z-50 border-b border-black/[.08] bg-white/80 py-4 backdrop-blur-md dark:border-white/[.145] dark:bg-black/80">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <Image className="dark:invert" src="/next.svg" alt="Logo" width={80} height={16} />
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Gazette</span>
          </div>
          <nav className="hidden gap-4 text-sm font-medium sm:flex">
            <a href="#" className="text-black dark:text-white">Home</a>
            <a href="#" className="text-zinc-500 hover:text-black dark:hover:text-white">Archive</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-12">
        {/* --- SEARCH & FILTERS --- */}
        <section className="mb-12 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
              News Feed
            </h1>
            <input
              type="text"
              placeholder="Search articles..."
              className="h-12 w-full rounded-full border border-black/[.08] bg-white px-6 text-base outline-none transition-all focus:border-black dark:border-white/[.145] dark:bg-zinc-900 dark:text-white dark:focus:border-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "border border-black/[.08] bg-white text-zinc-600 hover:bg-zinc-100 dark:border-white/[.145] dark:bg-black dark:text-zinc-400 dark:hover:bg-zinc-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* --- NEWS LIST --- */}
        <div className="flex flex-col gap-4">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))
          ) : (
            <div className="py-20 text-center text-zinc-500">
              No articles found matching your criteria.
            </div>
          )}
        </div>
      </main>

      {/* --- FOOTER --- */}
      <footer className="border-t border-black/[.08] bg-white py-12 dark:border-white/[.145] dark:bg-black">
        <div className="mx-auto max-w-4xl px-6 text-center sm:text-left">
          <div className="flex flex-col justify-between gap-6 sm:flex-row">
            <p className="text-sm text-zinc-500">© 2026 Personal Gazette. Manual Curation.</p>
            <div className="flex justify-center gap-6 text-sm font-medium text-zinc-900 dark:text-zinc-400">
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Terms</a>
              <a href="#" className="hover:underline">RSS</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}