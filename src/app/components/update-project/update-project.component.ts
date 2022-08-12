import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Project } from 'src/app/project';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {

  id:number | undefined;
  project:Project = new Project(0,"","");
  urest:Observable<Project> | undefined;
  sid:string = "0";

  constructor(private route:ActivatedRoute,
              private router:Router,
              private projectService:ProjectService) { }

  ngOnInit(): void {
    this.sid=this.route.snapshot.params['id'];
    this.id=Number.parseInt(this.sid);
    this.project=new Project(this.id,"","");
    console.log(this.id);
    this.projectService.getProject().subscribe(data=> {
      console.log(data);
      /* this.project=data; */
    });
  }

  onSubmit() {
    this.urest=this.projectService.updateProject(this.project);
    this.urest.subscribe(data=>{alert("Project updated successfully");});
    this.router.navigate(['/projects']);
  }

  list() {
    this.router.navigate(['/projects']);
  }

}
