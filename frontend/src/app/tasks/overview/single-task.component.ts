import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from '../../domain/Task';


@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html'
})
export class SingleTaskComponent {

  @Input()
  private task: Task;

  @Output()
  private out: EventEmitter<Task> = new EventEmitter();

  pushOut(task: Task) {
    this.out.emit(task);
  }
}
