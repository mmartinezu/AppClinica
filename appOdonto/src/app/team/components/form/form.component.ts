import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit {

  title:string
  group!: FormGroup
  
  constructor(private reference: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { 
      this.title = data ? 'EDICIÓN' : 'NUEVO'
    }

  ngOnInit(): void {
    this.loadForm()
  }

  loadForm(){
    this.group = new FormGroup({
      name: new FormControl(this.data?.name, Validators.required),
      cmp: new FormControl(this.data?.cmp, Validators.required),
      age: new FormControl(this.data?.age, Validators.required),
      title: new FormControl(this.data?.title, Validators.required),
      university: new FormControl(this.data?.university, Validators.required),
      speciality: new FormControl(this.data?.speciality, Validators.required),
    })
  }

  save() {
    const record = this.group.value
    this.reference.close(record)
  }

}
