import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{
  constructor(private route: ActivatedRoute){}

  newTaskTitle: string = ""
  date: Date = new Date();
  ngOnInit(): void {
    this.date = new Date(this.route.snapshot.params['date'])
  }

  tasks: Task[] = [
    new Task("Get candy"),
    new Task("Read goosebumps"),
    new Task("Go to the gym"),
    new Task("Spook"),
    new Task("Study angular"),
    new Task("Look at cat"),
    new Task("Eat")
  ]

  add(taskNgForm: NgForm){

    if(taskNgForm.touched == false){
      return;
    }

    if(taskNgForm.valid == false){
      return;
    }

    this.tasks.push(new Task(this.newTaskTitle))
    taskNgForm.reset({date: this.date})
  }

  remove(existingTask: Task){
    var userConfirmed = confirm(`Are you sure you want to remove the following task? ${existingTask.title}`)
    if(userConfirmed){
      this.tasks = this.tasks.filter(task => task != existingTask)
    }
  }

}

class Task {
  constructor(public title: string){

  }

  toggleIsDone(){
    this.isDone = !this.isDone
  }

  public isDone = false
}

class NewTask {
  constructor(public title: string = "", public date: Date = new Date()){

  }
}
