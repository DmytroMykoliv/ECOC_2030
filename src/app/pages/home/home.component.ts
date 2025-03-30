import { Component, computed, inject } from '@angular/core';
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
import { prehistory } from './constants';
import { ChangeLangDetectorService } from '@shared/services';

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
  private _langDetector = inject(ChangeLangDetectorService);

  public prehistory = prehistory;
  public activeAnchor = '';
  public isMobile = window.innerWidth < 767;

  public lang = computed(() => this._langDetector.lang());

  public section1 = computed(() => {
    return this.prehistory[this.lang()].section1;
  });

  handleChange(link: string): void {
    this.activeAnchor = link;
  }
}
