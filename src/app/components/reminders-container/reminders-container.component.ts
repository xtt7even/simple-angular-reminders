import { Component } from '@angular/core';

import { Reminder } from '../reminder-card/types/reminder.interface';
import { RemindersService } from '../../services/reminders.service';

@Component({
  selector: 'sr-reminders-container',
  templateUrl: './reminders-container.component.html',
  styleUrl: './reminders-container.component.scss',
})
export class RemindersContainerComponent {
  constructor(private remindersService: RemindersService) {}

  reminders: Reminder[] = this.remindersService.getReminders();
}
