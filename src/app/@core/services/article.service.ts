import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take, map } from 'rxjs';

import {
  Article,
  ArticlePublishDto,
  ArticlePublishInfo,
  ArticleResponse,
} from '@core/models';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class ArticleService {
  private article$ = new BehaviorSubject<Article | null>(null);

  constructor(private apiService: ApiService) {}

  publish(publishInfo: ArticlePublishInfo): Observable<Article> {
    const articlePublishDto: ArticlePublishDto = { article: publishInfo };

    return this.apiService.post('/articles', articlePublishDto).pipe(
      take(1),
      map((data: ArticleResponse) => {
        const { article } = data;
        return article;
      }),
    );
  }
}
