import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderButtonComponent } from './components/header/header-button/header-button.component';
import { HomeComponent } from './components/home/home.component';
import { PresentationComponent } from './components/home/presentation/presentation.component';
import { PulledApartComponent } from './components/home/pulled-apart/pulled-apart.component';
import { SlotComponent } from './components/home/pulled-apart/slot/slot.component';
import { PlusButtonComponent } from './components/plus-button/plus-button.component';
import { XButtonComponent } from './components/x-button/x-button.component';

const appRoutes:Routes = [
  {path:'', component:HomeComponent}
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
    XButtonComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing:  true}),
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
