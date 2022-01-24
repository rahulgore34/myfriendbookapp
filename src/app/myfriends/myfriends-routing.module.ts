import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyfriendsComponent } from './myfriends.component';

const routes: Routes = [
  { path: '', 
  component: MyfriendsComponent 
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyfriendsRoutingModule { }
