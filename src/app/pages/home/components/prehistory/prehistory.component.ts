import { Component, computed, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { prehistory } from './constants';
import { ChangeLangDetectorService } from '@shared/services';

@Component({
  selector: 'app-prehistory',
  standalone: true,
  imports: [TranslateModule, NzAnchorModule],
  templateUrl: './prehistory.component.html',
  styleUrl: './prehistory.component.scss',
})
export class PrehistoryComponent {
  private _langDetector = inject(ChangeLangDetectorService);

  public lang = computed(() => this._langDetector.lang());

  public isMobile = window.innerWidth < 767;
  public activeAnchor = '';

  private _prehistory = prehistory;

  public prehistory = computed(() => {
    return this._prehistory[this.lang()];
  });

  public handleChange(link: string): void {
    this.activeAnchor = link;
  }
}
