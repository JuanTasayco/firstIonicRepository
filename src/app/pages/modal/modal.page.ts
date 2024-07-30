import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoComponent } from 'src/app/components/modal-info/modal-info.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  message = "Nada por el momento";
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log('on Init')
  }

  async openModal() {
    console.log('abrir modal');
    const modal = await this.modalCtrl.create({
      component: ModalInfoComponent,
      componentProps: {
        nombre: 'Juan',
        apellido: 'Tasayco',
        data: {
          hola: '123',
          hola2: '1234'
        }
      }
    })
    modal.present();


    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      console.log(data)
      this.message = `Hola, acabas de ${data}`
    }


  }


}
