import { ViewportScroller } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SwitchLangComponent } from '../switch-lang/switch-lang.component';
import { BurgerMenuComponent } from '../burger-menu/burger-menu.component';

import { NzAffixModule } from 'ng-zorro-antd/affix';

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
  public isLangVisible = input(false);
  private scroller = inject(ViewportScroller);
  private router = inject(Router);

  public isMobile = window.innerWidth < 767;

  public scrollTo(id: string) {
    if (this.isLangVisible()) {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.scroller.scrollToAnchor(id);
        }, 0);
      });
      return;
    }
    this.scroller.scrollToAnchor(id);
  }
}
