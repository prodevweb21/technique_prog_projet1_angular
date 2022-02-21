import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Donnee } from './donnee';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DonneeService {

  donneesUrl = 'http://localhost/api-forfaits-voyages/liste-donnees-json.php';
  destination: string;

  constructor(private http: HttpClient) { }

  getDonnees(): Observable<Donnee[]> {
    return this.http.get<Donnee[]>(this.donneesUrl);
  }

  
}
