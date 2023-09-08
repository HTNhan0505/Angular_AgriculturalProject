import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  productList: Product[] = []
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
}
