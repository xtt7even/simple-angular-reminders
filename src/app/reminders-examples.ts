import { Reminder } from './components/reminder-card/types/reminder.interface';

export const ReminderExamples: Reminder[] = [
  {
    title: "Doctor's Appointment",
    description: 'Annual check-up with Dr. Smith.',
    due_date: '2024-08-20T10:00:00Z',
    remind_date: '2024-08-19T10:00:00Z',
    priority: 2,
  },
  {
    title: 'Project Deadline',
    description: 'Submit the final report for the Q3 project.',
    due_date: '2024-08-15T17:00:00Z',
    remind_date: '2024-08-14T17:00:00Z',
    priority: 1,
  },
  {
    title: 'Buy Groceries',
    description: null,
    due_date: '2024-08-12T18:00:00Z',
    remind_date: '2024-08-12T14:00:00Z',
    priority: 3,
  },
  {
    title: "Friend's Birthday",
    description:
      'Remember to call John on his birthday.Remember to call John on his birthday.Remember to call John on his birthday.Remember to call John on his birthday.Remember to call John on his birthday.Remember to call John on his birthday.Remember to call John on his birthday.Remember to call John on his birthday.Remember to call John on his birthday.Remember to call John on his birthday.Remember to call John on his birthday.Remember to call John on his birthday.Remember to call John on his birthday.Remember to call John on his birthday.Remember to call John on his birthday.Remember to call John on his birthday.Remember to call John on his birthday.Remember to call John on his birthday.Remember to call John on his birthday.',
    due_date: '2024-08-18T00:00:00Z',
    remind_date: '2024-08-17T12:00:00Z',
    priority: 2,
  },
  {
    title: 'Team Meeting',
    description: 'Weekly sync-up with the team.',
    due_date: '2024-08-14T09:00:00Z',
    remind_date: '2024-08-13T09:00:00Z',
    priority: 2,
  },
];
