import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import type { Article } from '@core/models';
import { ArticleService, UserService } from '@core/services';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EditableResolver implements Resolve<Observable<Article>> {
  constructor(
    private router: Router,
    private articleService: ArticleService,
    private userService: UserService,
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<Article> {
    const articleSlug = route.params['slug'];
    return this.articleService.get(articleSlug).pipe(
      map((article) => {
        const author = article.author?.username;
        const user = this.userService.getUserValue()?.username;

        if (author !== user) {
          this.router.navigateByUrl('/');
        }

        return article;
      }),
    );
  }
}
