import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor(private auth: AuthService) {}

  getUserRoles(): Observable<string[]> {
    return this.auth.user$.pipe(
      map((user) => {
        const namespace = 'http://localhost:4200';
        return user ? (user[namespace + 'roles'] as string[]) : [];
      })
    );
  }
}
