import { Hotel } from "./hotel";

export interface Forfait {
    id: string,
    destination: string,
    ville_de_depart: string,
    hotel: Hotel,
    date_de_depart: string,
    date_de_retour: string,
    prix: number,
    rabais: number,
    vedette: boolean,
}
