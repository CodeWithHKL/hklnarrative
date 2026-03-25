import Image from "next/image";
import { NewsArticle } from "@/lib/data";

export default function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full flex-col gap-4 rounded-2xl border border-black/[.08] p-6 transition-colors hover:bg-black/[.02] dark:border-white/[.145] dark:hover:bg-white/[.04] sm:flex-row"
    >
      <div className="flex flex-1 flex-col gap-2">
        <h2 className="text-xl font-semibold tracking-tight text-black dark:text-zinc-50">
          {article.title}
        </h2>
        <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400 line-clamp-2">
          {article.description}
        </p>
        <span className="mt-auto text-sm font-medium text-zinc-950 dark:text-zinc-50">
          Read article →
        </span>
      </div>
      
      <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-xl sm:w-48">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          unoptimized
        />
      </div>
    </a>
  );
}