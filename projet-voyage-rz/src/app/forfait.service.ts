import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Forfait } from './forfait';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ForfaitService {

  forfaitsUrl = 'http://localhost/api-forfaits-voyages/api/';

  constructor(private http: HttpClient) { }

  getForfaits(): Observable<Forfait[]> {
    return this.http.get<Forfait[]>(this.forfaitsUrl);
  }

  addForfait(forfait: Forfait): Observable<Forfait>{
    return this.http.post<Forfait>(this.forfaitsUrl, forfait,httpOptions);
  }
  // Source GitHub
  editForfait(forfait: Forfait): Observable<Forfait>{
    return this.http.put<Forfait>(this.forfaitsUrl + "?id=" + forfait.id, forfait, httpOptions);
  }
  // source diapo cours
//     UpdateForfait(forfait: Forfait): Observable<any> {
//     const id = forfait.id;
//     return this.http.put<Forfait>(this.forfaitsUrl + "?id=" + id, forfait, httpOptions);
// }
  deleteForfait(id: string): Observable<Forfait> {
    return this.http.delete<Forfait>(this.forfaitsUrl + "?id=" +  id);
  }
}

