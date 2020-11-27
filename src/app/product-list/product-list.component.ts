import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'

import { products } from '../products';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  constructor(private matDialog: MatDialog) {

  }

  share() {
    this.openDialog('The product has been shared!');
  }


  onNotify() {
    this.openDialog('You will be notified when the product goes on sale')
  }


  openDialog(message) {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.data = message
    this.matDialog.open(DialogBodyComponent, dialogConfig)
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
