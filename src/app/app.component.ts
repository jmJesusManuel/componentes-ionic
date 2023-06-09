import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/interfaces';
import { DataService } from './services/data.service';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

   componentes!: Observable<Componente[]>;



  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }

  constructor(private dataService:DataService) {

  }

  

}
