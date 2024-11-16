import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { HeaderMenuComponent } from '@shared/components';
import { NewsFirebaseService } from '@shared/services';
import { INews } from '@shared/interfaces';
import { RouterModule } from '@angular/router';
import { NewsItemComponent, NewsItemDesktopComponent } from './components';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    TranslateModule,
    RouterModule,
    HeaderMenuComponent,
    NewsItemDesktopComponent,
    NewsItemComponent,
    NzSpinModule,
    NzButtonModule,
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsComponent implements OnInit {
  private _cdr = inject(ChangeDetectorRef);
  private _newsFirebase = inject(NewsFirebaseService);

  public news: INews[] = [];
  public newsToShow: INews[] = [];
  public isLoading = signal(false);
  public isTablet = window.innerWidth < 1024;

  ngOnInit(): void {
    this._getNews();
  }

  private _getNews() {
    this.isLoading.set(true);

    this._newsFirebase.getNews().subscribe({
      next: (response) => {
        this.news = response;
        this.newsToShow = response.slice(0, 2);
        this.isLoading.set(false);

        this._cdr.markForCheck();
      },
    });
  }

  public loadMore() {
    this.newsToShow = this.news.slice(0, this.newsToShow.length + 1);
  }
}
