import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-inicio1',
  templateUrl: './inicio1.page.html',
  styleUrls: ['./inicio1.page.scss'],
})
export class Inicio1Page implements OnInit {

  componentes!: Observable<Componente[]>;

  constructor(private menuCtrl: MenuController,
              private dataService:DataService) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }

  mostrarMenu() {
    this.menuCtrl.open('first');

  }
}
