import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  group: FormGroup
  lockIcon = true

  constructor() { 

    this.group = new FormGroup({
      nombre: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      apellido: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      fecha: new FormControl(null, [Validators.required, Validators.nullValidator]),
      correo: new FormControl(null, [Validators.required, Validators.email]),
      telefono: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      motivo: new FormControl(null, [Validators.required, Validators.minLength(15), Validators.maxLength(100)]),
      recaptchaReactive: new FormControl(null, Validators.required)
    })

  }
  


  ngOnInit(): void {
  }

  save(){
    
  }


}
