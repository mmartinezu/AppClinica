import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from 'src/app/shared/interfaces/metadatacolumn.interface';
import { UtilsService } from '../../../services/utils.service';
import { KeyPadButton } from '../../../shared/interfaces/keybutton.interface';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  dataTreatments:any[] = [
    {id:'T01', name:'Odontología general', description:'Ofreciendo seguimiento en todos los casos para realizar controles periódicos de manera de detectar tempranamente patologías que puedan atacarse en una forma sencilla o simplemente aplicando tratamientos preventivos'},
    {id:'T02', name:'Odontología Estética', description:'Encargada de brindar al paciente tratamientos para mejorar su apariencia y aspecto físico, sin dejar de lado la función, a través de Diseños de Sonrisa, Carillas estéticas en diversos materiales, Blanqueamiento o aclaramiento dental, Restitución de piezas dentarias perdidas, reconstrucciones de dientes fracturados debido a caries o traumatismo'},
    {id:'T03', name:'Prótesis Dental', description:'Devolviendo al paciente piezas dentarias perdidas, restituyendo así su oclusión, dimensión vertical, mejorando tanto su aspecto físico como su calidad de vida'},
  ]

  listFieldsTreatments:string[] = ['id','name', 'description']
  metaDataColumns:MetaDataColumn[] = [
    {field: 'name', title:'TRATAMIENTO'},
    {field: 'description', title:'DESCRIPCION'},
  ]


  length=this.dataTreatments.length
  dataCache:any[]=this.dataTreatments

  ngOnInit(): void {
    this.dataCache = this.dataTreatments.slice(0,8)
  }  

  number !: number[]
  size=0 index=0 files=0 end=0
  
  nextPage(number: number[]){
    this.size=number[1]
    this.index=number[0]
    this.files=this.size*this.index  
    this.end=this.files+this.size
    this.dataCache = this.dataTreatments.slice(this.files,this.end)
  }

  keypadButtons: KeyPadButton[] = [
    {
      icon: "cloud_download",
      tooltip: "DESCARGAR",
      color: "accent",
      action: "DOWNLOAD"
    },
    {
      icon: "add",
      tooltip: "AGREGAR",
      color: "primary",
      action: "NEW"
    }
  ]

  constructor(private utilsService:UtilsService) { }

  openForm(row:any) {

  }

  delete(row:any) {

  }

  doAction(action:string){
    switch (action) {
      case 'DOWNLOAD':
        this.utilsService.showBottomSheet()
        break
      case 'NEW':
       // this.utilsService.showFormModal()
        break
    }
  }

}
