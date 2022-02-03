import { Component, OnInit } from '@angular/core';
// import { FORFAITS } from '../mock-forfaits';
// import { Forfait } from '../forfait';
import { Hotel } from "../hotel";

export interface Forfait {
  id: string,
  destination: string,
  villeDepart: string,
  hotel: Hotel,
  dateDepart: string,
  dateRetour: string,
  prix: number,
  
}

const ELEMENT_DATA: Forfait[] = [
  {id:'1', destination:'Mexique', villeDepart:'Quebec', hotel: {nomHotel:'Hilton', coordonnees:'2546 Boulevard des Pierres Mexico City', nombreEtoiles: 5, nombreChambres: 100, caracteristique:['Face à la plage', 'Ascenseur', 'Miniclub'] }, dateDepart:'2021-01-01', dateRetour:'2020-01-08', prix: 500,}, 
  {id:'2', destination:'New-York', villeDepart:'Quebec', hotel: {nomHotel:'Palace', coordonnees:'2548 Street City USA', nombreEtoiles: 3, nombreChambres: 100, caracteristique:['Face à la Forêt', 'Ascenseur', 'Golf'] }, dateDepart:'2020-02-01', dateRetour:'2020-05-01', prix: 1000,}, 
  {id:'3', destination:'Sydney', villeDepart:'Quebec', hotel: {nomHotel:'Mogador', coordonnees:'457 Wickham Terrace', nombreEtoiles: 2, nombreChambres: 105, caracteristique:['Face aux montagne ', 'Ascenseur', 'piscine'] }, dateDepart:'2020-03-01', dateRetour:'2020-10-01', prix: 890,}, 
  {id:'4', destination:'Tanger', villeDepart:'Quebec', hotel: {nomHotel:'Sofitel', coordonnees:'589 Mohammed V Rabat', nombreEtoiles: 4, nombreChambres: 130, caracteristique:['Face à la plage ', 'Ascenseur', 'spa'] }, dateDepart:'2020-03-15', dateRetour:'2020-03-25', prix: 1200,}, 
  {id:'5', destination:'Madrid', villeDepart:'Quebec', hotel: {nomHotel:'Andalousie', coordonnees:'69 Alfred William Madrid', nombreEtoiles: 2, nombreChambres: 200, caracteristique:['Face aux sites historiques ', 'Golf', 'piscine'] }, dateDepart:'2020-09-25', dateRetour:'2020-10-05', prix: 759,}, 
  {id:'6', destination:'Istanbul', villeDepart:'Quebec', hotel: {nomHotel:'Queen', coordonnees:'215 Av Ziad Istanbul', nombreEtoiles: 5, nombreChambres: 85, caracteristique:['Face au Bosphore ', 'À proximité des monuments historiques'] }, dateDepart:'2020-08-03', dateRetour:'2020-08-13', prix: 1050,}, 

]


@Component({
  selector: 'app-liste-forfait',
  templateUrl: './liste-forfait.component.html',
  styleUrls: ['./liste-forfait.component.css']
})
export class ListeForfaitComponent implements OnInit {

  displayedColumns: string[] = ['id', 'destination', 'villeDepart', 'nomHotel', 'coordonnees', 'nombreEtoiles', 'nombreChambres', 'caracteristique','dateDepart', 'dateRetour', 'prix' ];
  dataSource = ELEMENT_DATA;
  
  // forfaits : Forfait[] = FORFAITS;



  constructor() { }

  ngOnInit(): void {
  }

}
