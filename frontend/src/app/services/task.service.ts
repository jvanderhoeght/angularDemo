import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Task} from '../domain/Task';

@Injectable()
export class TaskService {

  private API = 'http://localhost:8080/tasks';


  constructor(private httpClient: HttpClient) {
  }

  public getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.API);
  }

  public createTask(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(this.API + '/create', task);
  }
}
