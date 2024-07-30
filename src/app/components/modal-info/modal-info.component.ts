import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.scss'],
})
export class ModalInfoComponent implements OnInit {
  name: string = "";
  constructor(private modalCtrl: ModalController) { }
  @Input() nombre: string = "";
  @Input() apellido: string = "";
  @Input() data: any = {};
  ngOnInit() {
    console.log(this.nombre)
    console.log(this.data)
  }

  confirm() {

    if (this.name) {
      return this.modalCtrl.dismiss(this.name, 'confirm')
    } else {
      return;
    }

  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

}
