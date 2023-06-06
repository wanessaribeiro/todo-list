import { Injectable } from '@angular/core';
import { TaskItem } from './task-item.dto';
import { NewTask } from './new-task.dto';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  private tasks = new BehaviorSubject([
    new TaskItem("Get candy"),
    new TaskItem("Read goosebumps"),
    new TaskItem("Go to the gym"),
    new TaskItem("Spook"),
    new TaskItem("Study angular"),
    new TaskItem("Look at cat"),
    new TaskItem("Eat")
  ])

  getAllTasks(): Observable<TaskItem[]>{

    return this.tasks
  }

  addTask(newTask: NewTask){

    var updatedTasks = this.tasks.value.concat(new TaskItem(newTask.title))
    this.tasks.next(updatedTasks)
  }

  removeTask(existingTask: TaskItem){

    var updatedTasks = this.tasks.value.filter(task => task != existingTask)
    this.tasks.next(updatedTasks)
  }
}
