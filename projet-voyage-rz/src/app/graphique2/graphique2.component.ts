import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { DonneeService } from '../donnee.service';
import { Donnee } from '../donnee';


@Component({
  selector: 'app-graphique2',
  templateUrl: './graphique2.component.html',
  styleUrls: ['./graphique2.component.css']
})
export class Graphique2Component implements OnInit {

  public monGraphique = {
    type: <ChartType>'pie',
    legende: true,
    options: { responsive: true, maintainAspectRatio: false }, 
    plugins: []
  };

  public donnee: ChartData<'pie', number[], string | string[]> = {
    labels: ['nbr_occupants', 'qte_cartes_cadeaux', 'spa', 'transport', 'minibar', 'nbr_reclamations', 'nbr_annulations' ],
    datasets: 
    [{
      data: [256,50,78,100,28,16,20],
      backgroundColor: ['#e60049', '#0bb4ff', '#50e991', '#e6d800', '#9b19f5', '#ffa300', '#dc0ab4']   
     }]
  };

  donnees: Donnee[]= [];


  constructor(private donneeService : DonneeService) { }

  ngOnInit(): void {
    this.getDonnees();
  }

  getDonnees(): void {
    this.donneeService.getDonnees()
      .subscribe(resultat => this.donnees = resultat);
  }

 
          // Légende A
          // this.donnee.datasets[2].data.push(this.donnees[2].nbr_occupants);
          // this.donnee.datasets[2].data.push(this.donnees[2].qte_cartes_cadeaux);
          // this.donnee.datasets[2].data.push(this.donnees[2].spa);
          // this.donnee.datasets[2].data.push(this.donnees[2].transport);
          // this.donnee.datasets[2].data.push(this.donnees[2].minibar);
          // this.donnee.datasets[2].data.push(this.donnees[2].nbr_reclamations);
          // this.donnee.datasets[2].data.push(this.donnees[2].nbr_annulations);


          // // Légende B
          // this.donnee.datasets[1].data.push(this.donnees[1].nbr_occupants);
          // this.donnee.datasets[1].data.push(this.donnees[1].qte_cartes_cadeaux);
          // this.donnee.datasets[1].data.push(this.donnees[1].spa);
          // this.donnee.datasets[1].data.push(this.donnees[1].transport);
          // this.donnee.datasets[1].data.push(this.donnees[1].minibar);
          // this.donnee.datasets[1].data.push(this.donnees[1].nbr_reclamations);
          // this.donnee.datasets[1].data.push(this.donnees[1].nbr_annulations);


          
        
  }

