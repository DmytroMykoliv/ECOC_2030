import { ViewportScroller } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SwitchLangComponent } from '../switch-lang/switch-lang.component';

@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [RouterModule, SwitchLangComponent, TranslateModule],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss',
})
export class HeaderMenuComponent {
  public isLangVisible = input(false);
  private scroller = inject(ViewportScroller);
  private router = inject(Router);

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
