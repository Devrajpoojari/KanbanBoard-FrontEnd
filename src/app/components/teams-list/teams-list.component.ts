import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';
import { Teams } from 'src/app/teams';
import { TeamsService } from 'src/app/service/teams.service';


@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})


export class TeamsListComponent implements OnInit {
  teams:Teams[] | undefined;
  Teams:Teams = new Teams(0,"","","");
  tea:Observable<Teams[]> | undefined;
  dtea:Observable<Teams> | undefined;
 /*  id: number | undefined; */

  constructor(private teamsService:TeamsService, private router:Router) { }

  ngOnInit(): void {
    this.tea = this.teamsService.getTeams();
    this.tea.subscribe((data) => this.teams= data);
    
  }

   /*  removeTeams(id:number): void {
    this.dtea = this.teamsService.deleteTeams(id);
    alert("Teams Deleted Successfully");
    this.dtea.subscribe((data)=>this.teamsService.getTeams());
  }  */

   deleteTeams(id:number):void {
    this.dtea=this.teamsService.deleteTeams(id);
    alert("Record deleted Successfully");
    location.reload();
    this.dtea.subscribe((data)=>this.teamsService.getTeams());
  }



 
 /*  updateTeams(id:number): void {
     this.dtea=this.teamsService.updateTeams(this.id);
    alert("update Successfully");
    location.reload();
    this.dtea.subscribe((data)=>this.teamsService.getTeams());

  
  } */

  updateTeams(id:number):void {
    this.router.navigate(['update',id]);
  }
}




  
  