import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { INews } from '@shared/interfaces';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { TranslateModule } from '@ngx-translate/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NewsFirebaseService } from '@shared/services';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-add-news-modal',
  standalone: true,
  imports: [
    TranslateModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
  ],
  templateUrl: './add-news-modal.component.html',
  styleUrl: './add-news-modal.component.scss',
})
export class AddNewsModalComponent implements OnInit {
  private _destroyRef = inject(DestroyRef);
  private _newsFirebase = inject(NewsFirebaseService);

  readonly #modal = inject(NzModalRef);
  readonly news?: INews = inject(NZ_MODAL_DATA);
  private _fb = inject(FormBuilder);

  public form!: FormGroup;
  public isLoading = false;

  ngOnInit(): void {
    this.form = this._fb.group({
      img_url: [this.news?.img_url || '', [Validators.required]],
      title: [this.news?.title || '', [Validators.required]],
      description: [this.news?.description || '', [Validators.required]],
    });
  }

  public submit() {
    if (this.form.valid) {
      this.isLoading = true;

      const body: INews = {
        ...this.form.value,
        ref:
          this.news?.ref ||
          this.form.value.title.trim().replace(/[^\w\d]/g, '-'),
        created_at: this.news?.created_at || new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };

      if (this.news?.id) {
        this.update(body);
      } else {
        this.addNews(body);
      }
    } else {
      Object.values(this.form.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  private addNews(body: INews) {
    this._newsFirebase
      .addNews(body)
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe({
        next: () => {
          this.isLoading = false;
          this.destroy(body);
        },
      });
  }

  private update(body: INews) {
    this._newsFirebase
      .update(this.news!.id, body)
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe({
        next: () => {
          this.isLoading = false;
          this.destroy(body);
        },
      });
  }

  public destroy(data: INews | null = null): void {
    this.#modal.destroy(data);
  }
}
