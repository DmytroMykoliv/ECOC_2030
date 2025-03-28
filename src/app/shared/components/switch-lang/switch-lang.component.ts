import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NzButtonModule } from 'ng-zorro-antd/button';

export enum ELang {
  en = 'en',
  ua = 'ua',
}

@Component({
  selector: 'app-switch-lang',
  standalone: true,
  imports: [TranslateModule, NzButtonModule],
  templateUrl: './switch-lang.component.html',
  styleUrl: './switch-lang.component.scss',
})
export class SwitchLangComponent {
  private _translate = inject(TranslateService);

  private _ecoc_lang = 'ecoc_lang';
  public currentLang = localStorage.getItem(this._ecoc_lang) || ELang.en;
  public en = 'en';
  public ua = 'ua';
  public langMenu = [this.en, this.ua];

  constructor() {
    this.langMenu = this.langMenu.filter((l) => l !== this.currentLang);
  }

  public use(lang: string) {
    this.currentLang = lang;
    this.langMenu = [this.en, this.ua];
    this.langMenu = this.langMenu.filter((l) => l !== lang);
    this._translate.use(lang);
    localStorage.setItem(this._ecoc_lang, lang);
  }
}
