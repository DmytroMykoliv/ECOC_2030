import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ECOC_LANG } from '@shared/constants';
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

  public currentLang = localStorage.getItem(ECOC_LANG) || ELang.en;
  public en = ELang.en;
  public ua = ELang.ua;
  public langMenu = [this.en, this.ua];

  constructor() {
    this.langMenu = this.langMenu.filter((l) => l !== this.currentLang);
  }

  public use(lang: string) {
    this.currentLang = lang;
    this.langMenu = [this.en, this.ua];
    this.langMenu = this.langMenu.filter((l) => l !== lang);
    this._translate.use(lang);
    localStorage.setItem(ECOC_LANG, lang);
  }
}
