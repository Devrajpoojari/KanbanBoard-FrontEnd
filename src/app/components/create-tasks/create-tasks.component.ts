import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TasksService } from 'src/app/service/tasks.service';
import { Tasks } from 'src/app/tasks';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-create-tasks',
  templateUrl: './create-tasks.component.html',
  styleUrls: ['./create-tasks.component.css']
})
export class CreateTasksComponent implements OnInit {
  //Drag &  Drop

  Movies = [
    'Blade Runner',
    'Cool Hand Luke',
    'Heat',
    'Juice',
    'The Far Side of the World',
    'Morituri',
    'Napoleon Dynamite',
    'Pulp Fiction'
  ];
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.Movies, event.previousIndex, event.currentIndex);
  }





  tasks:Tasks =new Tasks(0,"","");
  t:Observable<Tasks>;
  submitted=false;
  constructor(
    private taskService:TasksService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  
  onSubmit()
  {
    this.submitted =true;
    this.t=this.taskService.createTask(this.tasks);
    this.router.navigate(['/tasks-list']);
    this.t.subscribe(Data=> alert("Task Created Successfully"));
    
  }

}
