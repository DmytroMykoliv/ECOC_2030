import { Component, inject, OnInit, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderMenuComponent } from '@shared/components';
import { NewsFirebaseService } from '@shared/services';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [TranslateModule, HeaderMenuComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent implements OnInit {
  private _newsFirebase = inject(NewsFirebaseService);

  public news = [];
  public isLoading = signal(false);

  ngOnInit(): void {
    this._getNews();
  }

  private _getNews() {
    this.isLoading.set(true);

    this._newsFirebase
      .getNews()
      .pipe(finalize(() => this.isLoading.set(false)))
      .subscribe({
        next: (response) => {
          console.log(response);
        },
      });
  }
}
