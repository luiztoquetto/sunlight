import { BehaviorSubject, Unsubscribable } from 'rxjs';
import { Injectable } from "@angular/core";
import { UserEntity } from 'src/app/models/entities/user.entity';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private readonly loggedUserSubject: BehaviorSubject<UserEntity | null> = new BehaviorSubject<UserEntity | null>(null);

  subscribeLoggedUserForChanges(listener: (user: UserEntity | null) => void): Unsubscribable {
    return this.loggedUserSubject.subscribe(listener);
  }

  setLoggedUser(user: UserEntity): void {
    localStorage.setItem('user', JSON.stringify(user))
    this.loggedUserSubject.next(user);
  }

  setUpLoggedUser(): void {
    const user = localStorage.getItem('user')

    this.loggedUserSubject.next(user ? JSON.parse(user) : null);
  }

  isLogged(): boolean {
    const user = localStorage.getItem('user');

    return !!user;
  }

  clearLoggedUser(): void {
    localStorage.clear();
    this.loggedUserSubject.next(null);
  }
}
