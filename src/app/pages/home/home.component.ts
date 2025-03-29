import { Component, computed, DestroyRef, inject, signal } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import {
  ContactsComponent,
  EcocComponent,
  NewsListComponent,
  PartnersComponent,
} from './components';
import { ELang, HeaderComponent } from '@shared/components';
import { DatePipe } from '@angular/common';
import { IPrehistory, prehistory } from './constants';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ECOC_LANG } from '@shared/constants';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TranslateModule,
    HeaderComponent,
    EcocComponent,
    NzAnchorModule,
    NewsListComponent,
    PartnersComponent,
    ContactsComponent,
    DatePipe,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private _translate = inject(TranslateService);
  private destroyRef = inject(DestroyRef);

  public prehistory = prehistory;
  public activeAnchor = '';
  public isMobile = window.innerWidth < 767;

  public currentLang = (localStorage.getItem(ECOC_LANG) ||
    ELang.en) as keyof IPrehistory;
  public lang = signal<keyof IPrehistory>(this.currentLang);

  public section1 = computed(() => {
    return this.prehistory[this.lang()].section1;
  });

  constructor() {
    this._translate.onLangChange
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (resp) => {
          this.lang.set(resp.lang as keyof IPrehistory);
        },
      });
  }

  handleChange(link: string): void {
    this.activeAnchor = link;
  }
}
