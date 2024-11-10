import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderMenuComponent } from '@shared/components';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [TranslateModule, HeaderMenuComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent {}
