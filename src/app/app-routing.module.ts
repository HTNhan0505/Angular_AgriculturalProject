import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './Component/container/container.component';
import { AdminComponent } from './Pages/admin/admin.component';

const routes: Routes = [
  {
    path: "", component: ContainerComponent
  },
  {
    path: "admin", component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
