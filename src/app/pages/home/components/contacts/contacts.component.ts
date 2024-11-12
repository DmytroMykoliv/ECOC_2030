import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { GridSectionComponent } from '@shared/components';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [TranslateModule, GridSectionComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
})
export class ContactsComponent {
  public content = {
    title: 'nav.contacts',
  };
}
