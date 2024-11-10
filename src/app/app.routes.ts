import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.routes').then((m) => m.HOME_ROUTES),
  },
  {
    path: 'lviv-2030',
    loadChildren: () =>
      import('./pages/lviv-2030/lviv-2030.routes').then(
        (m) => m.LVIV_2030_ROUTES
      ),
  },
  {
    path: 'news',
    loadChildren: () =>
      import('./pages/news/news.routes').then((m) => m.NEWS_ROUTES),
  },
  {
    path: 'news/:id',
    loadChildren: () =>
      import('./pages/news-detail/news-detail.routes').then(
        (m) => m.NEWS_DETAIL_ROUTES
      ),
  },
];
