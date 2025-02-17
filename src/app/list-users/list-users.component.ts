import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserState } from '../store/user.state';
import {
  selectError,
  selectLoading,
  selectUsers,
} from '../store/user.selectors';
import { loadUsers } from '../store/user.action';
import { Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.scss',
})
export class ListUsersComponent {
  mySubscription!: Subscription;
  myObservable$!: Observable<number[]>;
  receivedValues: number[] = [];

  constructor(private store: Store<UserState>) {}

  users$ = this.store.select(selectUsers);
  loading$ = this.store.select(selectLoading);
  error$ = this.store.select(selectError);

  ngOnInit() {
    this.myObservable$ = of([1, 2, 3]);
  }

  fetchUsers() {
    this.store.dispatch(loadUsers());
  }

  ngOnDestroy() {
   
  }
}
