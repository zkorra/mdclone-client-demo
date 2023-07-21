import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';

import type { Article } from '@core/models';

@Component({
  selector: 'article-detail-view',
  templateUrl: './detail-view.component.html',
})
export class DetailViewComponent implements OnInit {
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
