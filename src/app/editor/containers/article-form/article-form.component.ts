import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'editor-article-form',
  templateUrl: './article-form.component.html',
})
export class ArticleFormComponent implements OnInit {
  articleForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.articleForm = this.fb.group(
      {
        title: ['', Validators.required],
        description: [''],
        body: ['', Validators.required],
        // tagList: ['']
      },
      { updateOn: 'submit' },
    );
  }

  onPublish() {
    console.log(this.articleForm.value);
  }
}
