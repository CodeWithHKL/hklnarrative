export interface NewsArticle {
  id: string;
  url: string;
  title: string;
  description: string;
  imageUrl: string;
}

export const articles: NewsArticle[] = [
  {
    id: "1",
    url: "https://nextjs.org/blog/next-15",
    title: "Next.js 15 is now stable",
    description: "The latest version of Next.js includes React 19 support, a new compiler, and faster builds.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7deFnFnYTypM-Zt9OAoZA4odyngknsgfvDg&s",
  },
  {
    id: "2",
    url: "https://vercel.com/blog",
    title: "Deploying AI at the Edge",
    description: "Learn how to use Vercel's infrastructure to deploy high-performance AI applications globally.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7deFnFnYTypM-Zt9OAoZA4odyngknsgfvDg&s",
  },
];