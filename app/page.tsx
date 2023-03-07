import { categories } from "../constants/constants";
import fetchNews from "../utils/fetchNews";

export default async function Page() {
  const news = await fetchNews(categories.join(","));

  return <section>2</section>;
}
