import { Component, Input, OnInit } from '@angular/core';
import { Reminder } from './types/reminder.interface';

@Component({
  selector: 'sr-reminder-card',
  templateUrl: './reminder-card.component.html',
  styleUrl: './reminder-card.component.scss',
})
export class ReminderCardComponent implements OnInit {
  @Input() reminder: Reminder | null = null; //remove these awful types

  convertDate(date: string): string {
    const newDate: Date = new Date(date);
    const stringResult: string = newDate.toLocaleDateString('default', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    });
    console.log(stringResult);
    return stringResult;
  }

  ngOnInit(): void {
    if (this.reminder) {
      this.reminder.remind_date = this.convertDate(this.reminder.remind_date);
      this.reminder.due_date = this.convertDate(this.reminder.due_date);
    }
  }

  constructor() {}
}
