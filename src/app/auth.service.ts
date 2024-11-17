import { inject, Injectable, signal } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  signOut,
  user,
} from '@angular/fire/auth';
import { IUser } from '@shared/interfaces';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _fireAuth = inject(Auth);
  public user$ = user(this._fireAuth);
  public currentUserSig = signal<IUser | null | undefined>(undefined);

  public login(data: { email: string; password: string }) {
    const promise = signInWithEmailAndPassword(
      this._fireAuth,
      data.email,
      data.password
    );

    return from(promise);
  }

  public logout() {
    const promise = signOut(this._fireAuth);

    return from(promise);
  }
}
