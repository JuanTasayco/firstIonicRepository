import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {
  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Share',
      handler: () => {
        console.log('compartiendo')
      }
    },
    {
      text: 'Cancel',
      role: 'cancel',
      cssClass: 'rojo',
      data: {
        action: 'cancel',
      },
    },
  ];

  constructor() { }

  ngOnInit() {
    console.log('hola');
  }

  onClick() { }

  logResult(event: CustomEvent) {
    console.log(event);
  }

}
