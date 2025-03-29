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
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { HeaderMenuComponent } from '@shared/components';
import { NewsFirebaseService } from '@shared/services';
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
  private _translate = inject(TranslateService);

  public news: INews[] = [];
  public newsToShow: INews[] = [];
  public isLoading = signal(false);
  public isTablet = window.innerWidth < 1024;
  private _currentLang = signal(this._translate.currentLang);

  public dateLang = computed(() => {
    return this._currentLang() === 'ua' ? 'uk' : 'en';
  });

  constructor() {
    this._translate.onLangChange
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (langEvent) => {
          this._currentLang.set(langEvent.lang);
        },
      });
  }

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
          this.news = response.filter((a) => a.status === 'published');
          this.newsToShow = response
            .filter((a) => a.status === 'published')
            .slice(0, 2);

          this.isLoading.set(false);
          this._cdr.markForCheck();
        },
      });
  }

  public loadMore() {
    this.newsToShow = this.news.slice(0, this.newsToShow.length + 1);
  }
}
