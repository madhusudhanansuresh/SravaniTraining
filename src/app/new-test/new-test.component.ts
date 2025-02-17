import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { User, UserState } from '../store/user.state';
import { Observable } from 'rxjs';
import { selectUsers } from '../store/user.selectors';

@Component({
  selector: 'app-new-test',
  templateUrl: './new-test.component.html',
  styleUrl: './new-test.component.scss'
})
export class NewTestComponent {
  users$!: Observable<any>

  constructor(private store: Store<UserState>)
  {
    
  }

  ngOnInit() {
    this.users$ = this.store.select(selectUsers);
  }

}
