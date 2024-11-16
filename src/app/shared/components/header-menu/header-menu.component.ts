import { Component, inject, input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { BurgerMenuComponent } from '../burger-menu/burger-menu.component';

import { NzAffixModule } from 'ng-zorro-antd/affix';
import { SwitchLangComponent } from '../switch-lang/switch-lang.component';

@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [
    RouterModule,
    TranslateModule,
    SwitchLangComponent,
    BurgerMenuComponent,
    NzAffixModule,
  ],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss',
})
export class HeaderMenuComponent {
  public isHomePage = input(false);
  public isLangVisible = input(false);
  private router = inject(Router);

  public isMobile = window.innerWidth < 767;

  public scrollTo(id: string) {
    if (this.isLangVisible()) {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this._scroll(id, 55);
        }, 0);
      });
      return;
    }
    this._scroll(id, 55);
  }

  private _scroll(id: string, offset: number = 0) {
    const element = document.getElementById(id);

    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
