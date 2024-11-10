import { Component, inject, OnInit, signal } from '@angular/core';

import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { HeaderMenuComponent } from '@shared/components';
import { NewsFirebaseService } from '@shared/services';
import { INews } from '@shared/interfaces';

import { finalize } from 'rxjs';
import { DatePipe } from '@angular/common';
import { AddNewsComponent, AddNewsModalService } from './components';
import { NzModalService } from 'ng-zorro-antd/modal';
import { TranslateModule } from '@ngx-translate/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    TranslateModule,
    HeaderMenuComponent,
    AddNewsComponent,
    NzTableModule,
    NzButtonModule,
    NzDividerModule,
    NzIconModule,
    NzAvatarModule,
    DatePipe,
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
  providers: [NzModalService],
})
export class AdminComponent implements OnInit {
  private _newsFirebase = inject(NewsFirebaseService);
  private _addNews = inject(AddNewsModalService);
  private modal = inject(NzModalService);

  public news: INews[] = [];
  public isLoading = signal(true);

  ngOnInit(): void {
    this._getNews();
  }

  private _getNews() {
    this.isLoading.set(false);

    this._newsFirebase
      .getNews()
      .pipe(finalize(() => this.isLoading.set(true)))
      .subscribe({
        next: (response) => {
          this.news = response;
          console.log(response);
        },
      });
  }

  openAddModal(data?: INews): void {
    this._addNews.openModal(data);
    this._addNews.activeModal?.afterClose.pipe(takeUntilDestroyed()).subscribe({
      next: (data) => {
        console.log('afterClose: ', data);
      },
    });
  }

  public delete(news: INews) {
    this.modal.confirm({
      nzTitle: '<i>Do you Want to delete these news?</i>',
      nzContent: `<b>${news.title}</b>`,
      nzOnOk: () => {
        console.log('OK');
        this._newsFirebase.remove(news.id).subscribe({
          next: (data) => {
            console.log('delete', data);

            this._getNews();
          },
        });
      },
    });
  }
}
