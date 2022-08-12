import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/service/tasks.service';
import { Tasks } from 'src/app/tasks';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import * as XLSX from 'xlsx';
import { FileSaverService } from 'ngx-filesaver';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  todoform !:FormGroup;
  tasks:Tasks[]=[];
  
  inprogress: Tasks[]=[];
  backlog:Tasks[]=[];
  peerreview:Tasks[]=[];
  inTest:Tasks[]=[];
  done:Tasks[]=[];
  
  constructor(
    private fb:FormBuilder,
    private taskService :TasksService,
    private filerSaver:FileSaverService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.todoform=this.fb.group({
      item:['',Validators.required]
    })
    this.getTasks();
  }
  drop(event: CdkDragDrop<Tasks[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  private getTasks()
  {
    this.taskService.getTasksList().subscribe(data=>{
      this.tasks=data;
    });
  }
  public excelExport(){
    const EXCEL_TYPE='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const EXCEL_EXTENSION='.xlsx';

    const worksheet= XLSX.utils.json_to_sheet(this.tasks);

    const workbook={
      Sheets:{
        'tasksheet':worksheet
      },
      SheetNames:['tasksheet']
    }
    const excelBuffer=XLSX.write(workbook,{bookType:'xlsx',type:'array'});
    const blobData=new Blob([excelBuffer],{type:EXCEL_TYPE});
    this.filerSaver.save(blobData,"TasksList");

  }  
}
