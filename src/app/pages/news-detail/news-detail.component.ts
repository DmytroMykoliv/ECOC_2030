import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { HeaderMenuComponent } from '@shared/components';
import { NewsFirebaseService } from '@shared/services';
import { INews } from '@shared/interfaces';

import { NzSpinModule } from 'ng-zorro-antd/spin';
import { DatePipe } from '@angular/common';
import { NewsListComponent } from '../home/components';

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
  private _newsFirebase = inject(NewsFirebaseService);

  private _ref = '';

  public article?: INews;
  public isLoading = signal(false);

  ngOnInit(): void {
    this._ref = this._route.snapshot.params['ref'];

    if (this._ref) {
      this.getArticle(this._ref);
    }
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
