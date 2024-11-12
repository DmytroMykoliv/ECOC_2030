import { Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { GridSectionComponent } from '@shared/components';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

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
export class EcocComponent {
  public content: NzSafeAny = input();
}
