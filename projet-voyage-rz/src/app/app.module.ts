import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ForfaitService } from './forfait.service';
import { MatDialogModule } from '@angular/material/dialog';


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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormulaireComponent } from './formulaire/formulaire.component';
import {MatChipsModule} from '@angular/material/chips';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { DialogFormulaireForfaitsComponent } from './dialog-formulaire-forfaits/dialog-formulaire-forfaits.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DestinationMexiquePipe } from './destination-mexique.pipe';
import { ForfaitsCubaComponent } from './forfaits-cuba/forfaits-cuba.component';
import { ForfaitsMexiqueComponent } from './forfaits-mexique/forfaits-mexique.component';
import { DestinationCubaPipe } from './destination-cuba.pipe';
import { GraphiqueComponent } from './graphique/graphique.component';
import { NgChartsModule } from 'ng2-charts';
import {MatSelectModule} from '@angular/material/select';
import { Graphique1Component } from './graphique1/graphique1.component';
import { Graphique2Component } from './graphique2/graphique2.component';
import { AProposComponent } from './a-propos/a-propos.component';
// import {Chart} from 'chart.js';

@NgModule({
  declarations: [
    DestinationCubaPipe,
    DestinationMexiquePipe,
    AppComponent,
    MiniForfaitComponent,
    ForfaitCompletComponent,
    EtoilesComponent,
    FormGestionForfaitComponent,
    FormulaireDeRechercheComponent,
    ListeForfaitComponent,
    FormulaireComponent,
    DialogFormulaireForfaitsComponent,
    NavbarComponent,
    DestinationMexiquePipe,
    ForfaitsCubaComponent,
    ForfaitsMexiqueComponent,
    DestinationCubaPipe,
    GraphiqueComponent,
    Graphique1Component,
    Graphique2Component,
    AProposComponent,

  ],
  imports: [
    MatSelectModule,
    MatToolbarModule,
    MatDialogModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatChipsModule,
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
    NgbModule,
    NgChartsModule,
  ],

  providers: [ForfaitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
