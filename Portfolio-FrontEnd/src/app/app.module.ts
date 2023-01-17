import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderButtonComponent } from './components/header/header-button/header-button.component';
import { HomeComponent } from './components/home/home.component';
import { PresentationComponent } from './components/home/presentation/presentation.component';
import { PulledApartComponent } from './components/home/pulled-apart/pulled-apart.component';
import { SlotComponent } from './components/home/pulled-apart/slot/slot.component';
import { PlusButtonComponent } from './components/plus-button/plus-button.component';
import { XButtonComponent } from './components/x-button/x-button.component';
import { LoginComponent } from './components/login/login.component';
import { HomeService } from './serivices/home.service';
import { InterceptorService } from './serivices/interceptor.service';
import { EditButtonComponent } from './components/edit-button/edit-button.component';

const appRoutes:Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderButtonComponent,
    HomeComponent,
    PresentationComponent,
    PulledApartComponent,
    SlotComponent,
    PlusButtonComponent,
    XButtonComponent,
    LoginComponent,
    EditButtonComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing:  true}),
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HomeService, {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
