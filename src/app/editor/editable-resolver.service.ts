import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Article } from '@core/models';
import { ArticleService } from '@core/services';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EditableResolver implements Resolve<Observable<Article>> {
  constructor(private articleService: ArticleService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<Article> {
    const articleId = route.params['slug'];

    throw new Error('Method not implemented.');
  }
}
