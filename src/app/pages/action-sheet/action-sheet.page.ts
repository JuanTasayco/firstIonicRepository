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
      icon: 'trash-outline',
    },
    {
      text: 'Share',
      icon: 'share-social-outline',
      handler: () => {
        console.log('compartiendo')
      }
    },
    {
      text: 'play',
      icon: 'play-outline',
      data: {
        resumen: 'calo es gay'
      },
      handler: () => {
        console.log('play')
      }
    },
    {
      text: 'Cancel',
      role: 'cancel',
      icon: 'close-outline',
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
