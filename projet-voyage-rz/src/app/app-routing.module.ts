import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForfaitCompletComponent } from './forfait-complet/forfait-complet.component';
import { FormGestionForfaitComponent } from './form-gestion-forfait/form-gestion-forfait.component';
// import  { ListeForfaitComponent } from './liste-forfait/liste-forfait.component'

// Ce bout de code permet de mettre toute la liste des forfaits complet dans un lien -à ouvrir-
const routes: Routes = [
  { path: 'forfaits', component: ForfaitCompletComponent },
  { path: 'tableau-forfaits', component: FormGestionForfaitComponent },
  // { path: 'graphiques', component:  },



  // La définition de cette section est dans les favoris section :AngularS3 
  // { path: '', redirectTo: '/forfaits', pathMatch:'full'},
  // { path: 'forfaits/:id', component: ListeForfaitComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
