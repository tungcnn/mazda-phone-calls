import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallInUseComponent } from './view/call-in-use/call-in-use.component';
import { CallListComponent } from './view/call-list/call-list.component';


const routes: Routes = [
  { path: 'calls', component: CallListComponent },
  { path: 'calls/:id', component: CallInUseComponent },
  { path: '',   redirectTo: 'calls', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
