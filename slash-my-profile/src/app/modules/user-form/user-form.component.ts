import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  userForm = this.fb.group({
    id: [''],
    username: ["", Validators.required],
    email: ["", [Validators.required, Validators.email]],
    gender: [""],
    description: [""],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  saveUser() {
    console.log(this.userForm.valid)
  }
}
