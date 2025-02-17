import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { NewTestComponent } from './new-test/new-test.component';

const routes: Routes = [
  {path:'list-users', component: ListUsersComponent},
  {path:'test', component: NewTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
