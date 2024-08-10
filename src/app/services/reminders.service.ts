import { Injectable } from '@angular/core';
import { ReminderExamples } from '../reminders-examples';
import { Reminder } from '../components/reminder-card/types/reminder.interface';

@Injectable({
  providedIn: 'root',
})
export class RemindersService {
  constructor() {}

  getReminders(): Reminder[] {
    return ReminderExamples;
  }
}
