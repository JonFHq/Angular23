import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departamento } from './IDepartamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  constructor(public _http: HttpClient) { }


  getDepartamentos(): Observable<Departamento[]> {
    return this._http.get<Departamento[]>('https://localhost:44322/api/Departamento');
  }


}
