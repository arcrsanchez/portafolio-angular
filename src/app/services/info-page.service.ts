import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Infopage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: Infopage = {};
  cargada = false;

  constructor(private http: HttpClient) {
    this.http.get('assets/data/data-page.json')
      .subscribe((resp: Infopage) => {
        this.cargada = true;
        this.info = resp;
        console.log(resp);
      });
  }
}
