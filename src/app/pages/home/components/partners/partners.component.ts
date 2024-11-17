import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [TranslateModule, NzCarouselModule],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss',
})
export class PartnersComponent implements OnInit {
  public content = {
    title: 'nav.partners',
  };

  public isMobile = window.innerWidth <= 580;

  public effect = 'scrollx';
  public partners: NzSafeAny = [
    {
      items: ['item 1', 'item 2', 'item 3'],
    },
    {
      items: ['item 4', 'item 5', 'item 6'],
    },
  ];

  ngOnInit(): void {
    if (window.innerWidth <= 580) {
      this.partners = this.partners
        .map((p: { items: NzSafeAny }) => p.items)
        .flat();
    }
  }
}
