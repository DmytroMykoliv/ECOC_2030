import { Component, computed, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ChangeLangDetectorService } from '@shared/services';

import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [TranslateModule, NzCarouselModule],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss',
})
export class PartnersComponent {
  private _langDetector = inject(ChangeLangDetectorService);

  public isMobile = window.innerWidth <= 580;

  public effect = 'scrollx';

  public lang = computed(() => {
    return this._langDetector.lang();
  });

  public partners = computed(() => {
    let partners = [
      {
        items: [
          `ESK-logo-poziom-${this.lang()}.webp`,
          `zmin_logo_${this.lang()}.svg`,
          `lviv_rada_${this.lang()}.svg`,
        ],
      },
      // {
      //   items: ['item 4', 'item 5', 'item 6'],
      // },
    ];

    if (window.innerWidth <= 580) {
      partners = partners.map((p: { items: NzSafeAny }) => p.items).flat();
    }

    return partners;
  });
}
