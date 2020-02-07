
import { Component } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../domain/User';

@Component({
  selector: 'app-users-overview',
  templateUrl: './users-overview.component.html'
})
export class UsersOverviewComponent {

  private users: User[] = [];

  constructor(private userService: UserService) {
  }

  getUsers() {
    this.userService.getUsers().subscribe(users => this.users = users);
  }
}

