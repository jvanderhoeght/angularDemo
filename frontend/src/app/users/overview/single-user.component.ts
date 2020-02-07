import {Component, Input} from '@angular/core';
import {User} from '../../domain/User';


@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html'
})
export class SingleUserComponent {

  @Input()
  private user: User;
}
