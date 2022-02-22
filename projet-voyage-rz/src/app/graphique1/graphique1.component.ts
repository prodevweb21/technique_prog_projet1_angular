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
    labels: [ 'id', 'nbr_occupants', 'qte_cartes_cadeaux', 'spa', 'transport', 'minibar', 'nbr_reclamations', 'nbr_annulations'],
    datasets: [
      { data: [0], label: '2018' },
      { data: [1], label: '2019' },

    ]
  };

  donnees: Donnee[] = [];


  constructor(private donneeService : DonneeService) { }

  ngOnInit(): void {
    this.getDonnees();
    
  }

  getDonnees() : void {
      this.donneeService.getDonnees()
          .subscribe(resultat => {
            this.donnees = resultat;
            // Légende A
            this.donnee.datasets[0].data.push(this.donnees[0].nbr_occupants);
            this.donnee.datasets[0].data.push(this.donnees[0].qte_cartes_cadeaux);
            this.donnee.datasets[0].data.push(this.donnees[0].spa);
            this.donnee.datasets[0].data.push(this.donnees[0].transport);
            this.donnee.datasets[0].data.push(this.donnees[0].minibar);
            this.donnee.datasets[0].data.push(this.donnees[0].nbr_reclamations);
            this.donnee.datasets[0].data.push(this.donnees[0].nbr_annulations);


            // Légende B
            this.donnee.datasets[1].data.push(this.donnees[1].nbr_occupants);
            this.donnee.datasets[1].data.push(this.donnees[1].qte_cartes_cadeaux);
            this.donnee.datasets[1].data.push(this.donnees[1].spa);
            this.donnee.datasets[1].data.push(this.donnees[1].transport);
            this.donnee.datasets[1].data.push(this.donnees[1].minibar);
            this.donnee.datasets[1].data.push(this.donnees[1].nbr_reclamations);
            this.donnee.datasets[1].data.push(this.donnees[1].nbr_annulations);


            
          });
    }


}
