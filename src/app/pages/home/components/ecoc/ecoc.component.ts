import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-ecoc',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './ecoc.component.html',
  styleUrls: [
    './ecoc.component.scss',
    '../../../../../styles/grid-section.scss',
  ],
})
export class EcocComponent {}
