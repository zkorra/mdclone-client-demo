import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';

import type { Article } from '@core/models';

@Component({
  selector: 'article-detail',
  templateUrl: './article-detail.component.html',
})
export class ArticleDetailComponent implements OnInit {
  article!: Article;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.getArticleFromResolver();
  }

  private getArticleFromResolver() {
    this.activatedRoute.data.pipe(take(1)).subscribe((data) => {
      this.article = data['article'];
    });
  }
}
