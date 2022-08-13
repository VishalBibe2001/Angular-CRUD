import {  NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobileAddComponent } from './components/mobile-add/mobile-add.component';
import { MobileDetailsComponent } from './components/mobile-details/mobile-details.component';
import { MobileEditComponent } from './components/mobile-edit/mobile-edit.component';
import { MobileListComponent } from './components/mobile-list/mobile-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'mobile-list' },
  { path: 'add-mobile', component:MobileAddComponent },
  { path: 'edit-mobile/:id', component:MobileEditComponent},
  { path: 'mobile-list', component:MobileListComponent },
  { path: 'mobile-details', component:MobileDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
