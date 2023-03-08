import { Article } from "./news-list-item/article";
import { NewsListProps } from "./news-list.types";

export const NewsList = ({ news }: NewsListProps) => {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4 dark:bg-[#201c1c] rounded-lg">
        {news.data.map((article) => (
          <Article key={article.title} article={article} />
        ))}
      </section>
    </>
  );
};
