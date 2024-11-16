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

import { HeaderMenuComponent } from '@shared/components';
import { NewsFirebaseService } from '@shared/services';
import { INews } from '@shared/interfaces';
import { RouterModule } from '@angular/router';
import { NewsItemComponent } from './components';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    TranslateModule,
    RouterModule,
    HeaderMenuComponent,
    NewsItemComponent,
    NzSpinModule,
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsComponent implements OnInit {
  private _cdr = inject(ChangeDetectorRef);
  private _newsFirebase = inject(NewsFirebaseService);

  public news: INews[] = [];
  public isLoading = signal(false);

  ngOnInit(): void {
    this._getNews();
  }

  private _getNews() {
    this.isLoading.set(true);

    this._newsFirebase.getNews().subscribe({
      next: (response) => {
        this.news = response;
        this.isLoading.set(false);

        this._cdr.markForCheck();
      },
    });
  }
}
