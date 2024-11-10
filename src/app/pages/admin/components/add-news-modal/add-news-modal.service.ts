import { Injectable } from '@angular/core';
import { INews } from '@shared/interfaces';
import { Subject } from 'rxjs';
import { AddNewsModalComponent } from './add-news-modal.component';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Injectable({
  providedIn: 'root',
})
export class AddNewsModalService {
  private _open = new Subject<INews | undefined>();
  public open$ = this._open.asObservable();

  public activeModal?: NzModalRef<AddNewsModalComponent, INews | null>;

  public openModal(data?: INews) {
    this._open.next(data);
  }

  public setModal(modal: NzModalRef<AddNewsModalComponent, INews | null>) {
    this.activeModal = modal;
  }

  public clearModal() {
    this.activeModal = undefined;
  }
}
