import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { GridSectionComponent, HeaderMenuComponent } from '@shared/components';

@Component({
  selector: 'app-lviv-2030',
  standalone: true,
  imports: [TranslateModule, HeaderMenuComponent, GridSectionComponent],
  templateUrl: './lviv-2030.component.html',
  styleUrls: [
    './lviv-2030.component.scss',
    '../../../styles/grid-section.scss',
  ],
})
export class Lviv2030Component {}
