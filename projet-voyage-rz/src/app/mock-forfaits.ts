import { Forfait } from "./forfait";


export const FORFAITS:Forfait[] = [
    {id:'1', destination:'Mexique', villeDepart:'Quebec', hotel: {nomHotel:'Hilton', coordonnees:'2546 Boulevard des Pierres Mexico City', nombreEtoiles: 6, nombreChambres: 100, caracteristique:['Face à la plage', 'Ascenseur', 'Miniclub'] }, dateDepart:'2021-01-01', dateRetour:'2020-01-08', prix: 500, rabais: 100, vedette: true, color: 'red',}, 
    {id:'2', destination:'New York', villeDepart:'Quebec', hotel: {nomHotel:'Palace', coordonnees:'2548 Street City USA', nombreEtoiles: 5, nombreChambres: 100, caracteristique:['Face à la Forêt', 'Ascenseur', 'Golf'] }, dateDepart:'2020-02-01', dateRetour:'2020-05-01', prix: 1000, rabais: 100, vedette: false, color: 'green',}, 
    {id:'3', destination:'Sydney', villeDepart:'Quebec', hotel: {nomHotel:'Mogador', coordonnees:'457 Wickham Terrace', nombreEtoiles: 4, nombreChambres: 100, caracteristique:['Face aux montagne ', 'Ascenseur', 'piscine'] }, dateDepart:'2020-03-01', dateRetour:'2020-10-01', prix: 890, rabais: 100, vedette: false, color: 'green',}, 
]