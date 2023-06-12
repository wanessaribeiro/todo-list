import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskItem } from '../tasks/task-item.dto';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent {

  @Input() tasks: TaskItem[] = []

  @Output() onRemove = new EventEmitter<TaskItem>()

  remove(taskItem: TaskItem){
    this.onRemove.next(taskItem)
  }
}
