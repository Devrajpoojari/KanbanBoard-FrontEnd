import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Project } from 'src/app/project';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects:Project[] | undefined;

  project:Project = new Project(0,"","");
  pros:Observable<Project[]> | undefined;
  dpros:Observable<Project> | undefined;

  
  constructor(private projectService:ProjectService, private router:Router) { }

  ngOnInit(): void {
    this.pros = this.projectService.getProject();
    this.pros.subscribe((data) => this.projects= data);
  }

  removeProject(id:number): void {
    this.dpros = this.projectService.deleteProject(id);
    alert("Project Deleted Successfully");
    location.reload();
    this.dpros.subscribe((data)=>this.projectService.getProject());
  }

  updateProject(id:number): void {
    this.router.navigate(['updateproject',id]);
    
  }


}
