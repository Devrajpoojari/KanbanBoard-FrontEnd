import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Teams } from 'src/app/teams';
import { TeamsService } from 'src/app/service/teams.service';




@Component({
  selector: 'app-teams',
  exportAs:'ngModel',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})



export class TeamsComponent implements OnInit {

  teams:Teams = new Teams(0,"","","");
  ctea:Observable<Teams> | undefined 
  submitted=false;

  constructor(private teamsService:TeamsService, private router:Router) { }
  
  ngOnInit(): void {
    
  }

  
  
    

  onSubmit() {
    this.submitted=true;
    this.ctea = this.teamsService.createTeams(this.teams);
    this.ctea.subscribe(Data=> alert("Teams Created Successfully"));
    this.router.navigate(['/teamlist']);
  }

}






 

  