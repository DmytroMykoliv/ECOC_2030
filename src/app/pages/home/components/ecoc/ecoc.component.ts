import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { GridSectionComponent } from '@shared/components';

@Component({
  selector: 'app-ecoc',
  standalone: true,
  imports: [TranslateModule, GridSectionComponent],
  templateUrl: './ecoc.component.html',
  styleUrls: [
    './ecoc.component.scss',
    '../../../../../styles/grid-section.scss',
  ],
})
export class EcocComponent {}
