import {
  computed,
  DestroyRef,
  inject,
  Injectable,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslateService } from '@ngx-translate/core';
import { ELang } from '@shared/components';
import { ECOC_LANG } from '@shared/constants';

@Injectable({
  providedIn: 'root',
})
export class ChangeLangDetectorService {
  private _translate = inject(TranslateService);
  private destroyRef = inject(DestroyRef);

  public currentLang: ELang =
    (localStorage.getItem(ECOC_LANG) as ELang) || ELang.en;
  public lang = signal(this.currentLang);

  constructor() {
    this._translate.onLangChange
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (resp) => {
          this.lang.set(resp.lang as ELang);
        },
      });
  }
}
