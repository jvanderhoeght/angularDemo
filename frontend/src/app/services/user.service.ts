import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../domain/User';

@Injectable()
export class UserService {

  private API = 'http://localhost:8080/users';


  constructor(private httpClient: HttpClient) {
  }

  public getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.API);
  }

  public createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.API + '/create', user);
  }
}
