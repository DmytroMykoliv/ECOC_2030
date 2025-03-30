import { Component, computed, inject } from '@angular/core';
import { ChangeLangDetectorService } from '@shared/services';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  private _langDetector = inject(ChangeLangDetectorService);

  public lang = computed(() => {
    return this._langDetector.lang();
  });
}
