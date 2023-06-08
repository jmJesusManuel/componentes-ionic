import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

   async presentAlert() {
     const alert = await this.alertCtrl.create({
      backdropDismiss:false,
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK']
    });

    await alert.present();
   }


     async presentAlertMultipleButtons() {
     const alert = await this.alertCtrl.create({
      backdropDismiss:false,
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
       buttons: [
         {

         text: 'Ok',
           handler: () => {
             console.log('click en ok!')
           }
           },{

          text: 'Cancelar',
           role: 'cancel',
           cssClass:'rojo'

           }
         ]
    });

    await alert.present();
   }

  async presentAlertPrompt() {

    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Prompt!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Placeholder 1'
        }, {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'Placeholder 2'
        },
        //multiline input
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Placeholder 3'

        },
        {
          name: '3',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'favorite site ever'

        }, {
          name: 'name 4',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12'

        }
      ],
      buttons: [
         {

         text: 'Ok',
           handler: (data :any) => {
             console.log(data)
           }
           },{

          text: 'Cancelar',
           role: 'cancel',
           cssClass:'secondary'

           }
         ]
    });
    await alert.present();
  }


}
