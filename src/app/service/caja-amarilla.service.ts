import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CajaAmarilla } from '../model/caja-amarilla';

@Injectable({
  providedIn: 'root'
})
export class CajaAmarillaService {
  private apiUrl = 'http://localhost:8080/cajas-amarillas';

  constructor(private http: HttpClient) { }

  obtenerCajasAmarillas(): Observable<CajaAmarilla[]> {
    return this.http.get<CajaAmarilla[]>(this.apiUrl);
  }

  crearCajaAmarilla(cajaAmarilla: CajaAmarilla): Observable<CajaAmarilla> {
    return this.http.post<CajaAmarilla>(this.apiUrl, cajaAmarilla);
  }

  eliminarCajaAmarilla(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
