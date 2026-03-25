"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { NewsArticle } from "@/lib/data";

export default function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <motion.a
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-black/[0.08] bg-white p-2 transition-all hover:bg-zinc-50 dark:border-white/[0.1] dark:bg-zinc-950 dark:hover:bg-zinc-900/50 ${
        article.priority ? "md:col-span-2 md:flex-row" : "col-span-1"
      }`}
    >
      <div className={`relative overflow-hidden rounded-2xl ${article.priority ? "h-64 md:h-full md:w-1/2" : "h-48 w-full"}`}>
        <Image
          src={article.imageUrl}
          alt=""
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          unoptimized
        />
        <div className="absolute left-3 top-3">
          <span className="rounded-full bg-black/50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
            {article.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-medium text-zinc-400">{article.date}</span>
            <ArrowUpRight className="h-4 w-4 text-zinc-300 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black dark:group-hover:text-white" />
          </div>
          <h2 className={`mt-2 font-semibold tracking-tight text-black dark:text-white ${article.priority ? "text-2xl" : "text-lg"}`}>
            {article.title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 line-clamp-2">
            {article.description}
          </p>
        </div>
      </div>
    </motion.a>
  );
}