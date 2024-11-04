import { ViewportScroller } from '@angular/common';
import { Component, inject } from '@angular/core';
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
  private scroller = inject(ViewportScroller);
  private router = inject(Router);

  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  public scrollTo(id: string) {
    this.close();
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        this.scroller.scrollToAnchor(id);
      }, 0);
    });
  }
}
