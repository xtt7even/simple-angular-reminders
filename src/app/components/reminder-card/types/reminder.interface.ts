export interface Reminder {
  title: string;
  description: string | null;
  due_date: string; //iso string date
  remind_date: string; //iso string date
  priority: number;
}
