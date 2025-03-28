import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { NzModalService } from 'ng-zorro-antd/modal';

import { AddNewsModalComponent } from './add-news-modal.component';
import { AddNewsModalService } from './add-news-modal.service';
import { INews } from '@shared/interfaces';

@Component({
  selector: 'app-add-news',
  standalone: true,
  imports: [],
  template: '',
})
export class AddNewsComponent {
  private _addModal = inject(AddNewsModalService);
  private modal = inject(NzModalService);

  constructor() {
    this._addModal.open$.pipe(takeUntilDestroyed()).subscribe({
      next: (value) => {
        this.createModal(value);
      },
    });
  }

  createModal(data?: INews): void {
    const modal = this.modal.create<AddNewsModalComponent, INews>({
      nzTitle: '',
      nzContent: AddNewsModalComponent,
      nzData: data,
      nzMaskClosable: false,
      nzWidth: '90%',
      nzOnOk: () => new Promise((resolve) => setTimeout(resolve, 1000)),
      nzFooter: null,
    });
  }
}
