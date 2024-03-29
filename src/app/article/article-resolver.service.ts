import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import type { Article } from '@core/models';
import { ArticleService } from '@core/services';
import { Observable, catchError, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ArticleResolver implements Resolve<Observable<Article>> {
  constructor(private router: Router, private articleService: ArticleService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<any> {
    const articleSlug = route.params['slug'];
    return this.articleService.get(articleSlug).pipe(
      map((article) => {
        if (!article.hasOwnProperty('slug')) {
          this.router.navigateByUrl('/404');
        }

        return article;
      }),
      catchError((error) => this.router.navigateByUrl('/')),
    );
  }
}
