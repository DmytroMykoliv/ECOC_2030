import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import {
  ContactsComponent,
  EcocComponent,
  NewsListComponent,
  PartnersComponent,
} from './components';
import { HeaderComponent } from '@shared/components';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TranslateModule,
    HeaderComponent,
    EcocComponent,
    NzAnchorModule,
    NewsListComponent,
    PartnersComponent,
    ContactsComponent,
    DatePipe,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public activeAnchor = '';
  public isMobile = window.innerWidth < 767;

  handleChange(link: string): void {
    this.activeAnchor = link;
  }
}
