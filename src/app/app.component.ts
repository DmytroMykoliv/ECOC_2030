import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { BackToTopComponent, FooterComponent } from '@shared/components';

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
    .outlet {
      height: 100%;
    }
  `,
})
export class AppComponent {
  title = 'ECOC_2030';
}
