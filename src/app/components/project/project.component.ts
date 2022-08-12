import { Component, Directive, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Project } from 'src/app/project';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-project',
  exportAs:'ngModel',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})


export class ProjectComponent implements OnInit {

  project:Project = new Project(0,"","");
  cpro:Observable<Project> | undefined 
  submitted=false;

  constructor(private projectService:ProjectService, private router:Router) { }
  
  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted=true;
    this.cpro = this.projectService.createProject(this.project);
    this.cpro.subscribe(Data=> alert("Project Created Successfully"));
    /* this.router.navigate(['/projectlist']); */
    location.reload();
  }

}
