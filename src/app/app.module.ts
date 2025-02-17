import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { userReducer } from './store/user.reducer';
import { UserEffects } from './store/user.effects';
import { HttpClientModule } from '@angular/common/http';
import { NewTestComponent } from './new-test/new-test.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    NewTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ user: userReducer }),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
