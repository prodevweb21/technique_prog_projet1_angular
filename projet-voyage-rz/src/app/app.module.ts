import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiniForfaitComponent } from './mini-forfait/mini-forfait.component';
import { ForfaitCompletComponent } from './forfait-complet/forfait-complet.component';
import { EtoilesComponent } from './etoiles/etoiles.component';
import { FormGestionForfaitComponent } from './form-gestion-forfait/form-gestion-forfait.component';
import { FormulaireDeRechercheComponent } from './formulaire-de-recherche/formulaire-de-recherche.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListeForfaitComponent } from './liste-forfait/liste-forfait.component';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {  FontAwesomeModule  }  from '@fortawesome/angular-fontawesome' ;
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ForfaitService } from './forfait.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormulaireComponent } from './formulaire/formulaire.component';



@NgModule({
  declarations: [
    AppComponent,
    MiniForfaitComponent,
    ForfaitCompletComponent,
    EtoilesComponent,
    FormGestionForfaitComponent,
    FormulaireDeRechercheComponent,
    ListeForfaitComponent,
    FormulaireComponent
  ],
  imports: [
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    MatTableModule,
    MatListModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [ForfaitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
