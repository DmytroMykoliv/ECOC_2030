import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { GridSectionComponent } from '@shared/components';
import { IGridContent } from '@shared/interfaces';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [TranslateModule, GridSectionComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
})
export class ContactsComponent {
  public content: IGridContent = {
    title: 'nav.contacts',
    block1: {
      ua: `
        <p>
          <a href="mailto:candidatecity.ecoc@lviv2030.eu">
            candidatecity.ecoc&#64;lviv2030.eu
          </a>
        </p>
        <p><a href="tel:+380951961580">+380951961580</a></p>
      `,
      en: `
        <p>
          <a href="mailto:candidatecity.ecoc@lviv2030.eu">
            candidatecity.ecoc&#64;lviv2030.eu
          </a>
        </p>
        <p><a href="tel:+380951961580">+380951961580</a></p>
      `,
    },
    block2: {
      ua: `
        <p>Інститут стратегії культури:</p>
        <p>
          <a href="mailto:csi.lviv.info@gmail.com">
            csi.lviv.info&#64;gmail.com
          </a>
        </p>
        <p>пл. Адама Міцкевича 6/7, Львів</p>
      `,
      en: `
        <p>Cultural Strategy Institute:</p>
        <p>
          <a href="mailto:csi.lviv.info@gmail.com">csi.lviv.info&#64;gmail.com</a>
        </p>
        <p>Mickiewicz Square 6/7, Lviv</p>
      `,
    },
  };
}
