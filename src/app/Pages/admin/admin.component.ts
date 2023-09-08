import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { DataService } from 'src/app/shared/data.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  productList: Product[] = []
  productObj: Product = {
    id: '',
    product_name: '',
    price: ''
  };
  id: string = ''
  product_name: string = ''
  price: string = ''

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.getAllProducts()
  }
  getAllProducts() {
    this.data.getAllProducts().subscribe(res => {
      this.productList = res.map((e: any) => {
        const data = e.payload.doc.data()
        data.id = e.payload.doc.id
        return data;
      })
    }, err => {
      alert('Error fetching data')
    })
  }
  resetForm() {
    this.id = '';
    this.product_name = '';
    this.price = '';
  }
  addProduct() {
    if (this.product_name == '' || this.price == '') {
      alert('Fill all input fields');
      return;
    }

    this.productObj.id = '';
    this.productObj.product_name = this.product_name;
    this.productObj.price = this.price;
    this.data.addProduct(this.productObj);
    this.resetForm()
  }
  updateStudent() {

  }
  deleteProduct(product: Product) {
    if (window.confirm('Are u sure delete ' + product.product_name + "?"))
      this.data.deleteProduct(product);
  }
}
