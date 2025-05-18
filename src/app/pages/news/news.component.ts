import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  computed,
  DestroyRef,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { HeaderMenuComponent } from '@shared/components';
import {
  ChangeLangDetectorService,
  NewsFirebaseService,
} from '@shared/services';
import { INews } from '@shared/interfaces';
import { RouterModule } from '@angular/router';
import { NewsItemComponent, NewsItemDesktopComponent } from './components';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
  private destroyRef = inject(DestroyRef);
  private _newsFirebase = inject(NewsFirebaseService);
  private _langDetector = inject(ChangeLangDetectorService);

  public news: INews[] = [];
  public newsToShow: INews[] = [];
  public isLoading = signal(false);
  public isTablet = window.innerWidth < 1024;

  public dateLang = computed(() => {
    return this._langDetector.lang() === 'ua' ? 'uk' : 'en';
  });

  ngOnInit(): void {
    this._getNews();
  }

  private _getNews() {
    this.isLoading.set(true);

    this._newsFirebase
      .getNews()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (response) => {
          this.news = response
            .filter((a) => a.status === 'published')
            .sort(
              (a, b) => Date.parse(b.created_at) - Date.parse(a.created_at)
            );
          this.newsToShow = this.news.slice(0, 2);

          this.isLoading.set(false);
          this._cdr.markForCheck();
        },
      });
  }

  public loadMore() {
    this.newsToShow = this.news.slice(0, this.newsToShow.length + 2);
  }
}
