import { categories } from "../constants/constants";
import resp from "../resp.json";
import fetchNews from "../utils/fetchNews";
import { NewsList } from "./widgets/news-list/news-list";

export default async function Page() {
  const news: NewsResponse = resp || (await fetchNews(categories.join(",")));

  return (
    <main>
      <NewsList news={news} />
    </main>
  );
}
