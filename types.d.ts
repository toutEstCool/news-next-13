type ArticleData = {
  author: string | null;
  title: string;
  description: string;
  url: string;
  source: string;
  image: string | null;
  category: string;
  language: string;
  country: string;
  published_at: string;
};

type Pagination = {
  count: number;
  limit: number;
  offset: number;
  total: number;
};

type NewsResponse = {
  pagination: Pagination;
  data: ArticleData[];
};

type Category =
  | "general"
  | "business"
  | "intertaiment"
  | "health"
  | "science"
  | "sports"
  | "tehnology";
