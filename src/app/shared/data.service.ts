import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs: AngularFirestore) { }

  // add Product
  addProduct(product: Product) {
    product.id = this.afs.createId();
    return this.afs.collection('/Products').add(product);
  }
  // get all Product
  getAllProducts() {
    return this.afs.collection('/Products').snapshotChanges();
  }
  // delete Product
  deleteProduct(product: Product) {
    this.afs.doc('/Products/' + product.id).delete();
  }

  // update Product
  updateStudent(product: Product) {
    this.deleteProduct(product);
    this.addProduct(product);
  }
}
