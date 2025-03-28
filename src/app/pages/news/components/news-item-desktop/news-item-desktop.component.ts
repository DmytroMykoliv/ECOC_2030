import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { INews } from '@shared/interfaces';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-news-item-desktop',
  standalone: true,
  imports: [RouterLink, TranslateModule, NzButtonModule, DatePipe],
  templateUrl: './news-item-desktop.component.html',
  styleUrl: './news-item-desktop.component.scss',
})
export class NewsItemDesktopComponent {
  public article = input.required<INews>();
  public dateLang = input<'uk' | 'en'>('en');

  public setArticle(id: string) {
    localStorage.setItem('ecoc_article_id', id);
  }
}
