import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MobileAddComponent } from './components/mobile-add/mobile-add.component';
import { MobileEditComponent } from './components/mobile-edit/mobile-edit.component';
import { MobileListComponent } from './components/mobile-list/mobile-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MobileDetailsComponent } from './components/mobile-details/mobile-details.component';


@NgModule({
  declarations: [
    AppComponent,
    MobileAddComponent,
    MobileEditComponent,
    MobileListComponent,
    NavbarComponent,
    MobileDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
