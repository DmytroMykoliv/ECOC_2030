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
import { DatePipe } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { NzSpinModule } from 'ng-zorro-antd/spin';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { NewsListComponent } from '../home/components';
import { HeaderMenuComponent } from '@shared/components';
import {
  ChangeLangDetectorService,
  NewsFirebaseService,
} from '@shared/services';
import { INews } from '@shared/interfaces';
import { filter } from 'rxjs';

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [
    TranslateModule,
    HeaderMenuComponent,
    NewsListComponent,
    NzSpinModule,
    DatePipe,
  ],
  templateUrl: './news-detail.component.html',
  styleUrl: './news-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsDetailComponent implements OnInit {
  private _router = inject(Router);
  private _route = inject(ActivatedRoute);
  private _cdr = inject(ChangeDetectorRef);
  private destroyRef = inject(DestroyRef);
  private _newsFirebase = inject(NewsFirebaseService);
  private _langDetector = inject(ChangeLangDetectorService);

  private _ref = '';

  public article?: INews;
  public isLoading = signal(false);

  public lang = computed(() => this._langDetector.lang());

  public dateLang = computed(() => {
    return this.lang() === 'ua' ? 'uk' : 'en';
  });

  ngOnInit(): void {
    this._ref = this._route.snapshot.params['ref'];

    if (this._ref) {
      this.getArticle(this._ref);
    }

    this._router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: () => {
          const ref = this._route.snapshot.params['ref'];

          if (this._ref !== ref) {
            this._ref = ref;
            this.getArticle(this._ref);
          }
        },
      });
  }

  getArticle(ref: string) {
    this.isLoading.set(true);

    this._newsFirebase.getNewsByRef('ref', ref).subscribe({
      next: (response) => {
        if (!response.empty) {
          this.article = response.docs[0].data() as INews;
        } else {
          this._router.navigate(['news']);
        }

        this.isLoading.set(false);

        this._cdr.markForCheck();
      },
    });
  }
}
