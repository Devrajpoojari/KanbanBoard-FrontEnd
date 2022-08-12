import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TeamsService } from 'src/app/service/teams.service';
import { Teams } from 'src/app/teams';



@Component({
  selector: 'app-update-teams',
  templateUrl: './update-teams.component.html',
  styleUrls: ['./update-teams.component.css']
})
export class UpdateTeamsComponent implements OnInit {

  id:number | undefined;
  teams:Teams = new Teams(0,"","","");
  dtea:Observable<Teams> | undefined;
  sid:string = "0";


  constructor(private route:ActivatedRoute,
    private router:Router,
    private teamsService:TeamsService) { }

    ngOnInit(): void {
      this.sid=this.route.snapshot.params['id'];
      this.id=Number.parseInt(this.sid);
      this.teams=new Teams(this.id,"","","");
      console.log(this.id);
      this.teamsService.getTeams().subscribe(data=> {
        console.log(data);
        /* this.teams[]=data; */
        
      });
    }
     
    

onSubmit() {
  
this.dtea=this.teamsService.updateTeams(this.teams);
this.dtea.subscribe(data=>{alert("Teams updated successfully");});
this.router.navigate(['/teams']);
}

list() {
this.router.navigate(['/teams']);
}
}





  