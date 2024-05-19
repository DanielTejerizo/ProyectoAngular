import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private apiUrl = 'http://localhost/api.php';

  constructor(private http: HttpClient) { }

  obtenerProductos(): Observable<any> {
    return this.http.get(`${this.apiUrl}?ruta=productos`);
  }
}
