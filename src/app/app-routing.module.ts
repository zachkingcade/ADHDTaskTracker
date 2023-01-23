import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTaskPageComponent } from './component/new-task-page/new-task-page.component';
import { ToDoPageComponent } from './component/to-do-page/to-do-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'new-task-page', pathMatch: 'full'},
  { path: 'new-task-page', component: NewTaskPageComponent },
  { path: 'to-do-page', component: ToDoPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }