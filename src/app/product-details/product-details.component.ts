import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'

import { products } from '../products';
import { CartService } from '../cart.service'
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product

  constructor(private route: ActivatedRoute, private cartService: CartService, private matDialog: MatDialog) { }

  addToCart(product) {
    this.cartService.addToCart(product)
    this.openDialog()
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.data = 'Added successfully!'
    this.matDialog.open(DialogBodyComponent, dialogConfig)
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')]
    })
  }

}
