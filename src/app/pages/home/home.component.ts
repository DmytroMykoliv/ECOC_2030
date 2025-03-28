import { Component, computed, inject, signal } from '@angular/core';
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

  public prehistory = prehistory;
  public activeAnchor = '';
  public isMobile = window.innerWidth < 767;

  private _ecoc_lang = 'ecoc_lang';
  public currentLang = (localStorage.getItem(this._ecoc_lang) ||
    ELang.en) as keyof IPrehistory;
  public lang = signal<keyof IPrehistory>(this.currentLang);

  public section1 = computed(() => {
    return this.prehistory[this.lang()].section1;
  });

  constructor() {
    this._translate.onLangChange.subscribe({
      next: (resp: { lang: 'en' | 'ua' }) => {
        this.lang.set(resp.lang);
        console.log('lang', resp);
      },
    });
  }

  handleChange(link: string): void {
    this.activeAnchor = link;
  }
}
