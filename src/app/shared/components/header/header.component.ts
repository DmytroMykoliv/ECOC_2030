import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { NzAffixModule } from 'ng-zorro-antd/affix';

import { HeaderMenuComponent } from '../header-menu';
import { SwitchLangComponent } from '../switch-lang/switch-lang.component';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';
import { BurgerMenuComponent } from '../burger-menu/burger-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    TranslateModule,
    HeaderMenuComponent,
    SwitchLangComponent,
    BurgerMenuComponent,
    NzAffixModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private router = inject(Router);

  public isHomePage = signal(false);

  public isMobile = window.innerWidth < 767;

  constructor() {
    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        takeUntilDestroyed()
      )
      .subscribe({
        next: (e) => {
          if (e.url === '/') {
            this.isHomePage.set(true);
          } else {
            this.isHomePage.set(false);
          }
        },
      });
  }
}
