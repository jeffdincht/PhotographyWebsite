import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';

import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  validationForm: FormGroup;
  submitted = false;
  invalidSubmitted= false;

  FormGroup = this.fb.group({

      name: "",
      to_name: "Admin",
      email: "",
      message: "",
  })

  constructor(private fb:FormBuilder) {
    this.validationForm = new FormGroup({
      name: new FormControl(null, {
        validators: Validators.required,
      }),
      email: new FormControl(null, {
        validators: [Validators.required, Validators.email],
      }),
      message: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(10)],
      }),
    });
  }

  get name(): AbstractControl {
    return this.validationForm.get('name')!;
  }

  get email(): AbstractControl {
    return this.validationForm.get('email')!;
  }

  get message(): AbstractControl {
    return this.validationForm.get('message')!;
  }

 async onSubmit(){
      if (!this.validationForm.valid) {
        console.log("Formulário inválido");
        this.invalidSubmitted= true;
        return;
      }
      console.log("Formulário válido");
      this.submitted = !this.submitted;

      emailjs.init('Livzu7FM2h2V2mHh6');
     let response = await emailjs.send("service_8upp89i","template_3j4kogd",{
     name: this.validationForm.value.name,
      to_name: this.validationForm.value.to_name,
      email: this.validationForm.value.email,
      message: this.validationForm.value.message,
      });

      this.validationForm.reset();
      this.submitted = false;

      }

    }



