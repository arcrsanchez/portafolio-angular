import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Infopage } from '../interfaces/info-page.interface';
import { Team } from '../interfaces/team.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: Infopage = {};
  cargada = false;
  team: Team[] = [];

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    this.http.get('assets/data/data-page.json')
      .subscribe((resp: Infopage) => {
        this.cargada = true;
        this.info = resp;
      });
  }

  private cargarEquipo() {
    this.http.get('https://angular-html-53b77.firebaseio.com/equipo.json')
      .subscribe((resp: Team[]) => {
        this.cargada = true;
        this.team = resp;
      });
  }

}
