import {
  Component,
  computed,
  DestroyRef,
  inject,
  OnInit,
  signal,
} from '@angular/core';

import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzModalService } from 'ng-zorro-antd/modal';

import { ELang, HeaderMenuComponent } from '@shared/components';
import { NewsFirebaseService } from '@shared/services';
import { INews } from '@shared/interfaces';

import { DatePipe, TitleCasePipe } from '@angular/common';
import {
  AddNewsComponent,
  AddNewsModalService,
  LoginComponent,
} from './components';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AuthService } from 'src/app/auth.service';
import { ECOC_LANG } from '@shared/constants';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    TranslateModule,
    HeaderMenuComponent,
    AddNewsComponent,
    LoginComponent,
    NzTableModule,
    NzButtonModule,
    NzDividerModule,
    NzIconModule,
    NzAvatarModule,
    NzSpinModule,
    DatePipe,
    TitleCasePipe,
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
  providers: [NzModalService],
})
export class AdminComponent implements OnInit {
  private _newsFirebase = inject(NewsFirebaseService);
  private _auth = inject(AuthService);
  private _addNews = inject(AddNewsModalService);
  private _translate = inject(TranslateService);
  private modal = inject(NzModalService);
  private destroyRef = inject(DestroyRef);

  public isAuth = signal(false);
  public isAuthLoading = signal(true);

  public news: INews[] = [];
  public isLoading = signal(true);

  public currentLang = localStorage.getItem(ECOC_LANG) || ELang.en;
  private _lang = signal(this.currentLang);
  public lang = computed(() => this._lang() as keyof Pick<INews, 'en' | 'ua'>);

  ngOnInit(): void {
    this._getNews();

    this._auth.user$.subscribe((user: any) => {
      if (user) {
        this._auth.currentUserSig.set({
          email: user.email,
          username: user.displayName,
        });

        this.isAuth.set(true);
      } else {
        this.isAuth.set(false);
      }

      this.isAuthLoading.set(false);
    });

    this._translate.onLangChange
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (resp) => {
          this._lang.set(resp.lang);
        },
      });
  }

  private _getNews() {
    this.isLoading.set(false);

    this._newsFirebase
      .getNews()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (response) => {
          this.news = response;
        },
      });
  }

  openAddModal(data?: INews): void {
    this._addNews.openModal(data);
    this._addNews.activeModal?.afterClose.pipe(takeUntilDestroyed()).subscribe({
      next: (data) => {
        console.log('afterClose: ', data);

        if (data) {
          this._getNews();
        }
      },
    });
  }

  public delete(news: INews) {
    this.modal.confirm({
      nzTitle: '<i>Do you Want to delete these news?</i>',
      nzContent: `<b>${news[this.lang()].title}</b>`,
      nzOnOk: () => {
        this._newsFirebase.remove(news.id).subscribe({
          next: () => {
            console.log('Deleted');

            // this._getNews();
          },
        });
      },
    });
  }

  public logout() {
    this._auth.logout();
  }
}
