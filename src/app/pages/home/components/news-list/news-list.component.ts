import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
  input,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { INews } from '@shared/interfaces';
import { NewsFirebaseService } from '@shared/services';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NewsItemComponent } from 'src/app/pages/news/components';

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [RouterModule, TranslateModule, NewsItemComponent, NzButtonModule],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsListComponent {
  public title = input('title.news');
  private _cdr = inject(ChangeDetectorRef);
  private destroyRef = inject(DestroyRef);
  private _newsFirebase = inject(NewsFirebaseService);

  public news: INews[] = [];
  public isLoading = signal(false);

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
            .slice(0, 2);
          this.isLoading.set(false);

          this._cdr.markForCheck();
        },
      });
  }
}
