import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take, map } from 'rxjs';

import {
  Article,
  ArticlePublishDto,
  ArticlePublishInfo,
  ArticleResponse,
  ArticlesResponse,
} from '@core/models';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class ArticleService {
  private article$ = new BehaviorSubject<Article | null>(null);

  constructor(private apiService: ApiService) {}

  getAll(): Observable<Article[]> {
    return this.apiService.get('/articles').pipe(
      take(1),
      map((data: ArticlesResponse) => data.articles),
    );
  }

  get(slug: string): Observable<Article> {
    return this.apiService.get(`/articles/${slug}`).pipe(
      take(1),
      map((data: ArticleResponse) => data.article),
    );
  }

  publish(article: ArticlePublishInfo): Observable<Article> {
    const articlePublishDto: ArticlePublishDto = { article: article };

    return this.apiService.post('/articles', articlePublishDto).pipe(
      take(1),
      map((data: ArticleResponse) => data.article),
    );
  }
}
