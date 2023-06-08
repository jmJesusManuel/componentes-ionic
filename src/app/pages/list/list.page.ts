import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {


//5
  usuarios: Observable<any> | undefined;

//4 termina de llamar
  constructor( private datasevice:DataService) { }

  ngOnInit() {
//6
    this.usuarios = this.datasevice.getUsuarios();

  }
  favorite(user: any) {
    console.log('favorite', user);
   
  }

  delete(user: any) {
    console.log('delete', user);
  }

  share(user: any) {
    console.log('share', user);
  }

}
