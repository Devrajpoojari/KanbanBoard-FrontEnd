import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AuthGuard } from './components/auth/auth.guard';
import { CreateTasksComponent } from './components/create-tasks/create-tasks.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectComponent } from './components/project/project.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TeamsListComponent } from './components/teams-list/teams-list.component';
import { TeamsComponent } from './components/teams/teams.component';
import { UpdateProjectComponent } from './components/update-project/update-project.component';
import { UpdateTeamsComponent } from './components/update-teams/update-teams.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path:'tasks-list',component:TasksListComponent},
  {path:'create-task',component:CreateTasksComponent},
  {path:'home',component:HomePageComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'loginpage',component:LoginPageComponent},
  {path:'projects', component:ProjectComponent},
  {path:'addTeams', component:TeamsComponent},
  {path: 'projectlist', component:ProjectListComponent},
  {path: 'teamlist', component:TeamsListComponent},
  {path: 'login', component:LoginComponent},
  {path: 'update/:id', component:UpdateTeamsComponent},
  {path: 'teams', component:TeamsListComponent},
  {path: 'updateproject/:id', component:UpdateProjectComponent},
  {path: 'register', component:RegistrationComponent},
  { path: 'admin', component: AdminComponent, canActivate:[AuthGuard], data:{roles:['Admin']} },
  { path: 'user', component: UserComponent ,  canActivate:[AuthGuard], data:{roles:['User']} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
