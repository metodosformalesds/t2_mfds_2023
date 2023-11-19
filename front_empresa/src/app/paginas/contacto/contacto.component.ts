import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.buildForm();
  }

  constructor(private formBuilder: FormBuilder) {}

  send(): void {
    const { name, email, message,phone,cu } = this.form.value;
    alert(`Name: ${name}, Email: ${email}, Phone: ${phone},Message: ${message},Cu: ${cu} `);
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      name: this.formBuilder.control(null),
      email: this.formBuilder.control(null),
      phone: this.formBuilder.control(null),
      cu: this.formBuilder.control(null),
      message: this.formBuilder.control(null),

    });
  }
}


