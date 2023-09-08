import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './Component/container/container.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { CreateProductComponent } from './Pages/create-product/create-product.component';
import { ListProductComponent } from './Pages/list-product/list-product.component';

const routes: Routes = [
  {
    path: "", component: ContainerComponent
  },
  {
    path: "admin", component: AdminComponent
  },
  {
    path: "admin/create", component: CreateProductComponent
  },
  {
    path: "admin/list", component: ListProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
