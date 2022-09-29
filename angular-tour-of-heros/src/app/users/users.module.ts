import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNewComponent } from './user-new/user-new.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [UserNewComponent, UserListComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
