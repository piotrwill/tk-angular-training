import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = []
  constructor(usersService: UsersService, private router: Router, private activatedRoute: ActivatedRoute) {
    usersService.getUsers$().subscribe((users) => {
      this.users = users
    })
  }

  ngOnInit(): void {
  }

  onClickNewUser() {
    this.router.navigate(['./new'], { relativeTo: this.activatedRoute });
  }

}
