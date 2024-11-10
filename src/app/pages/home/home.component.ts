import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { EcocComponent, NewsListComponent } from './components';
import { HeaderComponent } from '@shared/components';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TranslateModule,
    HeaderComponent,
    EcocComponent,
    NzAnchorModule,
    NewsListComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
