import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  { ListeForfaitComponent } from './liste-forfait/liste-forfait.component'


const routes: Routes = [
  { path: 'forfaits', component: ListeForfaitComponent },

  // La définition de cette section est dans les favoris section :AngularS3 
  // { path: '', redirectTo: '/forfaits', pathMatch:'full'},
  // { path: 'forfaits/:id', component: ListeForfaitComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
