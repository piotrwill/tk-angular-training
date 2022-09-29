import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNewComponent } from './user-new/user-new.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './users.component';



@NgModule({
  declarations: [UserNewComponent, UserListComponent, UsersComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UsersModule { }
