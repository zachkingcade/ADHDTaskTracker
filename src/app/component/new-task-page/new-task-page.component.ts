import { Component } from '@angular/core';

@Component({
  selector: 'app-new-task-page',
  templateUrl: './new-task-page.component.html',
  styleUrls: ['./new-task-page.component.scss']
})
export class NewTaskPageComponent {
  isRepeatable: boolean = false;

}
