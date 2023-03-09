import { ReadMoreButton } from "../../../components/read-more-button/read-more-button";
import { ArticleProps } from "./article.types";

export const Article = ({ article }: ArticleProps) => {
  return (
    <article className="bg-[#ffffff] dark:bg-slate-800 flex flex-col rounded-lg shadow-sm hover:scale-105 hover:shadow-lg hover:bg-slate-200 transition-all duration-200 ease-out p-2">
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="h-56 w-full object-cover rounded-t-lg shadow-md"
        />
      )}
      <div className="flex flex-col h-full justify-between">
        <div>
          <h3 className="font-thin text-sm text-orange-400 py-2">
            {article.category.toUpperCase()}
          </h3>
          <h2 className="font-bold font-serif text-lg tracking-wider mb-2">
            {article.title}
          </h2>
          <section className="font-medium tracking-wider mb-2 flex-1">
            <p className="text-xs line-clamp-3">{article.description}</p>
          </section>
          <footer className="text-xs text-right ml-auto flex space-x-1 pt-3 italic text-gray-400">
            <p>{article.source}</p>
            <p>{article.published_at}</p>
          </footer>
        </div>
        <ReadMoreButton article={article} />
      </div>
    </article>
  );
};
