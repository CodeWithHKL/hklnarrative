export type Category = "All" | "Politics" | "Business" | "Economy" | "Technology" | "Science" | "Health" | "Climate";

export interface NewsArticle {
  id: string;
  url: string;
  title: string;
  description: string;
  imageUrl: string;
  category: Category;
  date: string;
}

export const categories: Category[] = ["All", "Politics", "Business", "Economy", "Technology", "Science", "Health", "Climate"];

export const articles: NewsArticle[] = [
  {
    id: "1",
    url: "https://nextjs.org",
    title: "Next.js 15: The Future of React",
    description: "Deep dive into the new compiler architecture and React 19 integration.",
    imageUrl: "https://nextjs.org/og.png",
    category: "Technology",
    date: "Mar 25, 2026"
  },
  {
    id: "2",
    url: "https://example.com",
    title: "Global Markets Update",
    description: "How emerging economies are shaping the 2026 fiscal landscape.",
    imageUrl: "https://images.unsplash.com/photo-1611974714851-eb6053e68376?q=80&w=400&h=200&auto=format&fit=crop",
    category: "Economy",
    date: "Mar 24, 2026"
  }
];