import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Article } from '@core/models';
import { ArticleService } from '@core/services';
import { take } from 'rxjs';

@Component({
  selector: 'editor-article-form',
  templateUrl: './article-form.component.html',
})
export class ArticleFormComponent implements OnInit {
  articleForm!: FormGroup;
  article!: Article;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private articleService: ArticleService,
  ) {}

  ngOnInit() {
    this.buildForm();
    this.getArticleFromResolver();
  }

  private buildForm() {
    this.articleForm = this.fb.group(
      {
        title: ['', Validators.required],
        description: [''],
        body: ['', Validators.required],
        tagList: this.fb.array([]),
      },
      { updateOn: 'submit' },
    );
  }

  private getArticleFromResolver() {
    this.route.data.pipe(take(1)).subscribe((data) => {
      this.article = data['article'];
      this.articleForm.patchValue(data['article']);
    });
  }

  onPublish() {
    if (this.articleForm.invalid) {
      return;
    }
    console.log(this.articleForm.value);

    this.articleService.publish(this.articleForm.value).subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }
}
