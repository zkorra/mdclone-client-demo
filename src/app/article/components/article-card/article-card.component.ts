import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import type { Article } from '@core/models';

@Component({
  selector: 'article-card',
  templateUrl: './article-card.component.html',
})
export class ArticleCardComponent {
  @Input() article!: Article;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  goToArticle() {
    const { slug } = this.article;
    this.router.navigate([slug], { relativeTo: this.activatedRoute });
  }
}
