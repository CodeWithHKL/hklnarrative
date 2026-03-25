import Image from "next/image";
import { NewsArticle } from "@/lib/data";

export default function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex w-full flex-col gap-6 rounded-2xl border border-black/[.08] bg-white p-6 transition-all hover:shadow-lg hover:shadow-black/[.03] dark:border-white/[.145] dark:bg-zinc-950 dark:hover:bg-zinc-900 sm:flex-row"
    >
      <div className="flex flex-1 flex-col gap-3">
        <div className="flex items-center gap-3">
          <span className="rounded-md bg-zinc-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
            {article.category}
          </span>
          <span className="text-xs text-zinc-400">{article.date}</span>
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-black dark:text-zinc-50 group-hover:underline decoration-1 underline-offset-4">
          {article.title}
        </h2>
        <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400 line-clamp-2">
          {article.description}
        </p>
      </div>
      
      <div className="relative h-28 w-full shrink-0 overflow-hidden rounded-xl sm:w-40">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized
        />
      </div>
    </a>
  );
}