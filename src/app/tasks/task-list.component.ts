import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TaskItem } from './task-item.dto';
import { NewTask } from './new-task.dto';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{

  constructor(private route: ActivatedRoute, private taskService: TaskService){}

  tasks = this.taskService.getAllTasks()

  newTask: NewTask = new NewTask()

  ngOnInit(): void {
    var strDate = this.route.snapshot.params['date']
    this.newTask = new NewTask(this.newTask.title, new Date(strDate))
  }

  add(taskNgForm: NgForm){

    if(taskNgForm.touched == false){
      return;
    }

    if(taskNgForm.valid == false){
      return;
    }

    this.taskService.addTask(this.newTask)
    taskNgForm.reset({date: this.newTask.date})
  }

  remove(existingTask: TaskItem){
    var userConfirmed = confirm(`Are you sure you want to remove the following task? ${existingTask.title}`)
    if(userConfirmed){
      this.taskService.removeTask(existingTask)
    }
  }

}


