import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { NzAffixModule } from 'ng-zorro-antd/affix';

import { HeaderMenuComponent } from '../header-menu';
import { SwitchLangComponent } from '../switch-lang/switch-lang.component';
import { BurgerMenuComponent } from '../burger-menu/burger-menu.component';
import { ChangeLangDetectorService } from '@shared/services';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';

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
  private _langDetector = inject(ChangeLangDetectorService);

  public isHomePage = signal(false);

  public isMobile = window.innerWidth < 767;

  public lang = computed(() => this._langDetector.lang());

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
