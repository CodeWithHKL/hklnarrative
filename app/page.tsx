import Image from "next/image";
import { articles } from "@/lib/data";
import NewsCard from "@/components/NewsCard";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col py-24 px-8 bg-white dark:bg-black sm:px-16">
        
        {/* Header Section */}
        <div className="mb-16 flex flex-col items-center gap-6 sm:items-start">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            My Curated Headlines.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            A personal collection of articles. Click any card to navigate to the original source.
          </p>
        </div>

        {/* News Feed */}
        <div className="flex flex-col gap-6 w-full">
          {articles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-auto pt-20 flex gap-6 text-sm font-medium text-zinc-500">
          <p>© 2026 Personal News System</p>
          <a href="https://nextjs.org/docs" className="hover:underline">Docs</a>
        </footer>
      </main>
    </div>
  );
}