import { Component } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../domain/User';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {

  private userForm: FormGroup;
  private savedUser: User;

  constructor(private fb: FormBuilder,
              private userService: UserService) {
    this.userForm = this.fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('')
    });
  }

  submit() {
    this.userService.createUser(this.userForm.value).subscribe(user => {
      this.savedUser = user;
    });
  }

  checkValid(control: FormControl): boolean {
    if (control.touched) {
      return control.valid;
    }
    return true;
  }
}
