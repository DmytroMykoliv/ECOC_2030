import { Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'app-grid-section',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './grid-section.component.html',
  styleUrls: [
    './grid-section.component.scss',
    '../../../../styles/grid-section.scss',
  ],
})
export class GridSectionComponent {
  public content: NzSafeAny = input();
}
