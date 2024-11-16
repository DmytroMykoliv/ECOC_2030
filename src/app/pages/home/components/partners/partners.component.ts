import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { GridSectionComponent } from '@shared/components';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [TranslateModule, GridSectionComponent],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss',
})
export class PartnersComponent {
  public content = {
    title: 'nav.partners',
  };
}
