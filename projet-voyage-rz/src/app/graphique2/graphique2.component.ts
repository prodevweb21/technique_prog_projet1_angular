import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

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

  public mesDonnees: ChartData<'pie', number[], string | string[]> = {
    labels: ['Produit ABC', 'Produit XYZ', 'Autre produit...'],
    datasets: [{
      data: [5800, 1536, 3657], 
      backgroundColor: ['#e60049', '#0bb4ff', '#50e991', '#e6d800', '#9b19f5', '#ffa300', '#dc0ab4', '#b3d4ff', '#00bfa0']
    }]
  };

  constructor() { }

  ngOnInit(): void {
  }

}