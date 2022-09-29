import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User, UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  formGroup!: FormGroup
  newUser: Partial<User> = {}

  constructor(private router: Router, formBuilder: FormBuilder, private usersService: UsersService) {
    this.formGroup = formBuilder.group({
      name: [''],
      email: ['']
    })

    this.formGroup.valueChanges.subscribe(newValues => {
      this.newUser = {...this.newUser, ...newValues, status: 'changed' }
      console.log(this.newUser)
    })

  }

  onSaveClick() {
    this.usersService.saveNewUser$(this.newUser)
    this.router.navigate(['users'])
  }

  ngOnInit(): void {
  }

}
