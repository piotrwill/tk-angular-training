import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserListComponent } from "./user-list/user-list.component";
import { UserNewComponent } from "./user-new/user-new.component";

const routes: Routes = [

  {
    path: '',
    component: UserListComponent,
  },
  {
    path: 'new',
    component: UserNewComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}