import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../services/category/category.service';
import Category from '../../models/Category';
import {NewsService} from '../../services/news/news.service';
import News from '../../models/News';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  @Input()
  article: News;

  categories: Category[];
  articleForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private newsService: NewsService
  ) {
    categoryService
      .categories
      .subscribe(categories => this.categories = categories);
  }

  onSubmit(): void {
    if (this.articleForm.valid) {
      const {title, subtitle, category, content} = this.articleForm.getRawValue();
      const article = {
        title,
        subtitle,
        categoryId: category,
        content
      };

      if (this.article) {
        this.newsService.updateArticle(article, this.article.id);
      } else {
        this.newsService.addArticle(article);
      }
    }
  }

  ngOnInit(): void {
    this.articleForm = this.formBuilder
      .group({
        title: [this.article?.title, Validators.required],
        subtitle: [this.article?.subtitle, Validators.required],
        category: [this.article?.categoryId, Validators.required],
        content: [this.article?.content, Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])
        ],
      });
  }
}
