import { inject, Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  Firestore,
  setDoc,
} from '@angular/fire/firestore';
import { INews } from '@shared/interfaces';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsFirebaseService {
  public firestore = inject(Firestore);
  public newsCollections = collection(this.firestore, 'news');

  public getNews() {
    return collectionData(this.newsCollections, {
      idField: 'id',
    }) as Observable<INews[]>;
  }

  public addNews(body: INews) {
    const promise = addDoc(this.newsCollections, body);
    return from(promise);
  }

  public update(id: string, body: INews): Observable<void> {
    const docRef = doc(this.firestore, 'news/' + id);
    const promise = setDoc(docRef, body);
    return from(promise);
  }

  public remove(id: string): Observable<void> {
    const docRef = doc(this.firestore, 'news/' + id);
    const promise = deleteDoc(docRef);
    return from(promise);
  }
}
