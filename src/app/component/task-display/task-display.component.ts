import { Component } from '@angular/core';
import { TaskData } from 'src/app/models/TaskData';
import { Time } from 'src/app/models/Time';

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
    startTime: {
      hours: 12,
      minutes: 0,
      period: 'Am'
    },
    endDate: new Date,
    endTime: {
      hours: 12,
      minutes: 0,
      period: 'Am'
    },
    estimatedTime: '1.5 Hours',
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
  }

  getFormattedDate(date: Date): string {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');

    return month + '/' + day + '/' + year;
  }

  formatTime(data: Time): string{
    let newHours = ('0' + data.hours).slice(-2);
    let newMinutes = ('0' + data.minutes).slice(-2);
    return `${newHours}:${newMinutes} ${data.period}`;
  }

  AdvanceStatus() {
    console.log('advanceStatus');
  }
}
