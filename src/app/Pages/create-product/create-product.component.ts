import { Component } from '@angular/core';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  createProduct = new FormGroup({
    nameproduct: new FormControl(),
    priceproduct: new FormControl()
  })
  constructor(private firestore: Firestore) {
    this.getData()
  }

  addData() {
    const collectionInstance = collection(this.firestore, 'nameproduct');
    addDoc(collectionInstance, this.createProduct.value)
      .then(() => {
        console.log('Data Saved Success')
      })
      .catch((err) => {
        console.log(err)
      })
  }
  getData() {
    const collectionInstance = collection(this.firestore, 'nameproduct');
    collectionData(collectionInstance).subscribe(val => {
      console.log(val)
    })
  }
}
