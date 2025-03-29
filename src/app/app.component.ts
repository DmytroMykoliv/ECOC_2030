import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { BackToTopComponent, ELang, FooterComponent } from '@shared/components';
import { ECOC_LANG } from '@shared/constants';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule, BackToTopComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 100vh;
    }
  `,
})
export class AppComponent {
  private translate = inject(TranslateService);

  public currentLang = localStorage.getItem(ECOC_LANG) || ELang.en;
  constructor() {
    this.translate.setDefaultLang(ELang.en);
    this.translate.use(this.currentLang);
  }
}
