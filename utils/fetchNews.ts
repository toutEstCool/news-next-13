import { gql } from "graphql-request";

import { sortNewsByImage } from "./sortNews";

/**
 * #1 {GraphQL query}
 * #2 {Fetch function with Next.js 13 caching}
 * #3 {Sort function by images vs not images present}
 * #4 {return res}
 */
const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  const endpoint =
    "https://helsinki.stepzen.net/api/ignoble-waterbuffalo/__graphql";

  const query = gql`
    query MyQuery($access_key: String!) {
      myQuery(
        access_key: $access_key
        # categories: $categories
        countries: "gb"
        sort: "published_desc" # keywords: $keywords
      ) {
        data {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;

  const res = await fetch(
    "https://helsinki.stepzen.net/api/ignoble-waterbuffalo/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 120 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.NEWS_API_KEY,
          categories: category,
          keywords: keywords,
        },
      }),
    }
  );

  const newResponse = await res.json();

  const news = sortNewsByImage(newResponse.data.myQuery);

  return news;
};

fetchNews();

export default fetchNews;
// "http://api.mediastack.com/v1/news?access_key=7c9cc31626fa3ce185058b4850efe45d&countries=us%2Cgb&limit=100&offset=0&sort=published_desc"
