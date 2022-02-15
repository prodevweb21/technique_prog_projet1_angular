import { Component, OnInit } from '@angular/core';
// import { FORFAITS } from '../mock-forfaits';
// import { Forfait } from '../forfait';
import { Hotel } from "../hotel";

export interface Forfait {
  id: string,
    destination: string,
    ville_de_depart: string,
    hotel: Hotel,
    date_de_depart: string,
    date_de_retour: string,
    prix: number,
    
  
}

const ELEMENT_DATA: Forfait[] = [
  {id:'1', destination:'Mexique', ville_de_depart:'Quebec', hotel: {nom_hotel:'Hilton', coordonnees:'2546 Boulevard des Pierres Mexico City',nombre_etoiles: 5, nombre_chambres: 100, caracteristiques:['Face à la plage', 'Ascenseur', 'Miniclub'] }, date_de_depart:'2021-01-01', date_de_retour:'2020-01-08', prix: 500,}, 
  {id:'2', destination:'New-York', ville_de_depart:'Quebec', hotel: {nom_hotel:'Palace', coordonnees:'2548 Street City USA', nombre_etoiles: 3, nombre_chambres: 100, caracteristiques:['Face à la Forêt', 'Ascenseur', 'Golf'] }, date_de_depart:'2020-02-01', date_de_retour:'2020-05-01', prix: 1000,}, 
  {id:'3', destination:'Sydney', ville_de_depart:'Quebec', hotel: {nom_hotel:'Mogador', coordonnees:'457 Wickham Terrace', nombre_etoiles: 2, nombre_chambres: 105, caracteristiques:['Face aux montagne ', 'Ascenseur', 'piscine'] }, date_de_depart:'2020-03-01', date_de_retour:'2020-10-01', prix: 890,}, 
  {id:'4', destination:'Tanger', ville_de_depart:'Quebec', hotel: {nom_hotel:'Sofitel', coordonnees:'589 Mohammed V Rabat', nombre_etoiles: 4, nombre_chambres: 130, caracteristiques:['Face à la plage ', 'Ascenseur', 'spa'] }, date_de_depart:'2020-03-15', date_de_retour:'2020-03-25', prix: 1200,}, 
  {id:'5', destination:'Madrid', ville_de_depart:'Quebec', hotel: {nom_hotel:'Andalousie', coordonnees:'69 Alfred William Madrid', nombre_etoiles: 2, nombre_chambres: 200, caracteristiques:['Face aux sites historiques ', 'Golf', 'piscine'] }, date_de_depart:'2020-09-25', date_de_retour:'2020-10-05', prix: 759,}, 
  {id:'6', destination:'Istanbul', ville_de_depart:'Quebec', hotel: {nom_hotel:'Queen', coordonnees:'215 Av Ziad Istanbul', nombre_etoiles: 4, nombre_chambres: 85, caracteristiques:['Face au Bosphore ', 'À proximité des monuments historiques'] }, date_de_depart:'2020-08-03', date_de_retour:'2020-08-13', prix: 1050,}, 

]


@Component({
  selector: 'app-liste-forfait',
  templateUrl: './liste-forfait.component.html',
  styleUrls: ['./liste-forfait.component.css']
})
export class ListeForfaitComponent implements OnInit {

displayedColumns: string[] = ['id', 'destination', 'ville_de_depart', 'nom_hotel', 'coordonnees', 'nombre_etoiles', 'nombre_chambres', 'caracteristiques','date_de_depart', 'date_de_retour', 'prix' ];
  dataSource = ELEMENT_DATA;
  
  // forfaits : Forfait[] = FORFAITS;



  constructor() { }

  ngOnInit(): void {
  }

}
