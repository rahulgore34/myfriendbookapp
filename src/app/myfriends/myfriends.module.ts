import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyfriendsRoutingModule } from './myfriends-routing.module';
import { MyfriendsComponent } from './myfriends.component';


@NgModule({
  declarations: [
    MyfriendsComponent
  ],
  imports: [
    CommonModule,
    MyfriendsRoutingModule
  ]
})
export class MyfriendsModule { }
