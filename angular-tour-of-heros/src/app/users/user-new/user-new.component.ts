import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    this.formGroup = formBuilder.nonNullable.group({
      name: ['', { validators: [Validators.required]}],
      email: ['', { validators: [Validators.required, Validators.email]}],
      gender: ['', { validators: [Validators.required, Validators.pattern(/^male$|^female$/)]}]
    })

    this.formGroup.valueChanges.subscribe(newValues => {
      this.newUser = {...this.newUser, ...newValues, status: 'active' }
      console.log(this.newUser)
    })
  }

  get controls() { return this.formGroup.controls }

  onSaveClick() {
    this.usersService.saveNewUser$(this.newUser).subscribe({
      next: (data) => console.log('received', data),
      error: (err) => console.error(err),
      complete: () => this.router.navigate(['users'])
    })
  }

  ngOnInit(): void {
  }

}
