import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {
  loading!: HTMLIonLoadingElement;


  constructor(private loadingCtl: LoadingController) { }



  ngOnInit() {
  }

  mostrarLoading() {
    this.presentLoading('Cargando...');


    setTimeout(() => {
      this.loading.dismiss();
    }, 2000);
  }

  //  async presentLoading() {
  //   const loading = await this.loadingCtl.create({
  //     message: 'Cargando...',

  //   });
  //    await loading.present();
  //  }

  async presentLoading(message:string) {
    this.loading = await this.loadingCtl.create({
      message,

    });
     await this.loading.present();
  }
}