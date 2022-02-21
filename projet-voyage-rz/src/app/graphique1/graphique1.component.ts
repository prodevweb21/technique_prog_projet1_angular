import { Component, ViewChild, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { DonneeService } from '../donnee.service';
import { Donnee } from '../donnee';


@Component({
  selector: 'app-graphique1',
  templateUrl: './graphique1.component.html',
  styleUrls: ['./graphique1.component.css']
})
export class Graphique1Component implements OnInit {

  public monGraphique = {
    type: <ChartType>'bar',
    legende: true,
    plugins:[],
    options: { responsive: true, maintainAspectRatio: false }
  };

  public donnee: ChartData<'bar', number[], string | string[]> = {
    labels: ['nbr_occupants', 'activite_spa', 'service_transport', 'film_sur_demande', 'minibar_collation', 'qte_cartes_cadeaux', 'nbr_reclamations', 'nbr_annulations' ],
    datasets: [
      { data: [800, 581, 568, 485, 852, 215, 749, 542], label: 'Moyenne A' },
      { data: [400, 190, 230, 140, 200, 356, 487, 678], label: 'Moyenne B' }
    ]
  };

  donnees: Donnee[] = [];


  constructor(private donneeService : DonneeService) { }

  ngOnInit(): void {
    this.getDonnees();
  }

  getDonnees() : void {
      this.donneeService.getDonnees()
          .subscribe(resultat => this.donnees = resultat);
    }


}
