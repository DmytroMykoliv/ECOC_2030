import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {
  ContactsComponent,
  EcocComponent,
  NewsListComponent,
  PartnersComponent,
  PrehistoryComponent,
} from './components';
import { HeaderComponent } from '@shared/components';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TranslateModule,
    HeaderComponent,
    EcocComponent,
    PrehistoryComponent,
    NewsListComponent,
    PartnersComponent,
    ContactsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
