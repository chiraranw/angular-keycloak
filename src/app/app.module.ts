import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './manager/manager.component';
import { UserComponent } from './user/user.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { initializer } from 'src/utils/app-init';
import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'home', component: HomeComponent},
  { path: 'admin', component: AdminComponent },
  { path: 'manager', component: ManagerComponent },
  { path: 'user', component: UserComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    ManagerComponent,
    UserComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,    
    KeycloakAngularModule,
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializer,
    deps: [KeycloakService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
