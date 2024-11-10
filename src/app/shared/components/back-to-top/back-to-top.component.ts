import { DOCUMENT } from '@angular/common';
import { Component, HostListener, inject, signal } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [NzButtonModule, NzIconModule],
  templateUrl: './back-to-top.component.html',
  styleUrl: './back-to-top.component.scss',
})
export class BackToTopComponent {
  private document = inject(DOCUMENT);
  public windowScrolled = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > window.innerHeight) {
      this.windowScrolled.set(true);
    } else if (window.scrollY < window.innerHeight) {
      this.windowScrolled.set(false);
    }
  }

  public scrollToTop() {
    (function smoothscroll() {
      const currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, 0);
      }
    })();
  }
}
