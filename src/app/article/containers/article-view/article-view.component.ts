import { Component, OnInit } from '@angular/core';
import { ArticleService } from '@core/services';

@Component({
  selector: 'article-view',
  templateUrl: './article-view.component.html',
})
export class ArticleViewComponent implements OnInit {
  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    throw new Error('Method not implemented.');
  }
}
