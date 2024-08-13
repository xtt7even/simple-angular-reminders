import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'sr-add-reminder',
  templateUrl: './add-reminder.component.html',
  styleUrl: './add-reminder.component.scss',
})
export class AddReminderComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  addForm = this.formBuilder.group({
    title: new FormControl('', [Validators.required]),
    description: new FormControl(null),
    due_date: new FormControl(new Date().toISOString()),
    remind_date: new FormControl(new Date().toISOString()),
    priority: new FormControl(1),
  });

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.addForm.value);
  }
}
