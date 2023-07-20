import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';

import { Article } from '@core/models';

@Component({
  selector: 'article-view',
  templateUrl: './article-view.component.html',
})
export class ArticleViewComponent implements OnInit {
  article!: Article;
  routeData$ = this.activatedRoute.data;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // throw new Errsor('Method not implemented.');
    // this.getArticleFromResolver();
  }

  private getArticleFromResolver() {
    this.activatedRoute.data.pipe(take(1)).subscribe((data) => {
      this.article = data['article'];
    });
  }
}
