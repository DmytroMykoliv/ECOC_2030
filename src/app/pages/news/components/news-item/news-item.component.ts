import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { INews } from '@shared/interfaces';

@Component({
  selector: 'app-news-item',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './news-item.component.html',
  styleUrl: './news-item.component.scss',
})
export class NewsItemComponent {
  public article = input.required<INews>();
  public dateLang = input<'uk' | 'en'>('en');

  public setArticle(id: string) {
    localStorage.setItem('ecoc_article_id', id);
  }
}
