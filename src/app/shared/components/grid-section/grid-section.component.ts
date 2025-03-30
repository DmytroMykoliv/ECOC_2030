import { Component, computed, inject, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IGridContent } from '@shared/interfaces';
import { ChangeLangDetectorService } from '@shared/services';

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
  public content = input<IGridContent>();

  private _langDetector = inject(ChangeLangDetectorService);

  public lang = computed(() => this._langDetector.lang());
}
