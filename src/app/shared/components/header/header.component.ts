import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderMenuComponent } from '../header-menu';

import { NavigationEnd, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';
import { SwitchLangComponent } from '../switch-lang/switch-lang.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, HeaderMenuComponent, SwitchLangComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private router = inject(Router);

  public isHomePage = signal(false);

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
