import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { EcocComponent, NewsComponent } from './components';
import { HeaderComponent } from '@shared/components';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TranslateModule,
    HeaderComponent,
    EcocComponent,
    NzAnchorModule,
    NewsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
