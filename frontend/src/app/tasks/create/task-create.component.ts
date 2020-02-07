import { Component } from '@angular/core';
import {TaskService} from '../../services/task.service';
import {Task} from '../../domain/Task';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent {

  private taskForm: FormGroup;
  private savedTask: Task;

  constructor(private fb: FormBuilder,
              private taskService: TaskService) {
    this.taskForm = this.fb.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('')
    });
  }

  submit() {
    this.taskService.createTask(this.taskForm.value).subscribe(task => {
      this.savedTask = task;
    });
  }

  checkValid(control: FormControl): boolean {
    if (control.touched) {
      return control.valid;
    }
    return true;
  }
}
