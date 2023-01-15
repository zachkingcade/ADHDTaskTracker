import { Component } from '@angular/core';
import { TaskData } from 'src/app/models/TaskData';
import { Time } from "@angular/common";

@Component({
  selector: 'app-task-display',
  templateUrl: './task-display.component.html',
  styleUrls: ['./task-display.component.scss']
})
export class TaskDisplayComponent {
  item: TaskData = {
    goal: "Setup eye Doctor Appointment",
    person: "Zachary",
    place: "Home",
    status: "On Hold",
    startDate: new Date,
    //startTime: new Time,
    endDate: new Date,
    //endTime: new Time,
    //estimatedTime: new Time,
    notes: "",
  }
  detailsOpened: boolean = false;
  taskTimeoutId!: NodeJS.Timeout;
  statusTimeoutId!: NodeJS.Timeout;

  startInputTask() {
    this.taskTimeoutId = setTimeout(() => {
      this.detailsOpened = true;
    }, 500)
  }

  endInputTask() {
    clearTimeout(this.taskTimeoutId)
  }

  startInputStatus() {
    this.statusTimeoutId = setTimeout(() => {
      this.AdvanceStatus();
    }, 1000)
  }

  endInputStatus() {
    clearTimeout(this.statusTimeoutId)
  }

  closeDetails() {
    this.detailsOpened = false;
    console.log(this.getFormattedDate(this.item.startDate as Date));
  }

  getFormattedDate(date: Date): string {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');

    return month + '/' + day + '/' + year;
  }

  AdvanceStatus() {
    console.log('advanceStatus');
  }
}
