import { Component } from '@angular/core';
import {TaskService} from '../../services/task.service';
import {Task} from '../../domain/Task';

@Component({
  selector: 'app-tasks-overview',
  templateUrl: './tasks-overview.component.html'
})
export class TasksOverviewComponent {

  private tasks: Task[] = [];

  constructor(private taskService: TaskService) {
  }

  getTasks() {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

}
