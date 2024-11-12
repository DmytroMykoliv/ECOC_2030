import { Component, inject, input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [
    RouterModule,
    TranslateModule,
    NzButtonModule,
    NzDrawerModule,
    NzIconModule,
  ],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss',
})
export class BurgerMenuComponent {
  public isHomePage = input(false);

  private router = inject(Router);

  public visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  public scrollToId(id: string, offset = 60) {
    this.close();

    if (this.isHomePage()) {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this._scroll(id, offset);
        }, 0);
      });
      return;
    }
    setTimeout(() => {
      this._scroll(id, offset);
    }, 350);
  }

  private _scroll(id: string, offset: number = 0) {
    const element = document.getElementById(id);

    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
