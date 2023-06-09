import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {


  superHeroes: Observable<any> | undefined;
  publisher: string = '';

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.superHeroes = this.dataService.getheroes();

  }

  segmentChanged(event:any) {

    console.log(event)
    this.publisher = event.detail.value;
  }

}
