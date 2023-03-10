import fetchNews from "../../utils/fetchNews";
import { NewsList } from "../widgets/news-list/news-list";
import { SearchPageProps } from "./search.types";

async function SearchPage({ searchParams }: SearchPageProps) {
  const news: NewsResponse = await fetchNews(
    "general",
    searchParams?.term,
    true
  );
  return (
    <div>
      <h1>Search Result for: ${searchParams?.term}</h1>
      <NewsList news={news} />
    </div>
  );
}

export default SearchPage;
