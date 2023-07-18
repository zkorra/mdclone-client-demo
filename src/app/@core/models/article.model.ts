export interface Article {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: Author;
}

export interface Author {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}

export interface ArticleResponse {
  article: Article;
}

export interface ArticlePublishInfo {
  article: {
    title: string;
    description: string;
    body: string;
    tagList: string[];
  };
}

export interface ArticlePublishDto {
  article: ArticlePublishInfo;
}

export interface ArticlesResponse {
  articles: Article[];
  articlesCount: number;
}
