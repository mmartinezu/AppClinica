import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UtilsService } from 'src/app/services/utils.service';
import { KeyPadButton } from '../../../shared/interfaces/keybutton.interface';
import { MetaDataColumn } from '../../../shared/interfaces/metadatacolumn.interface';
import { FormComponent } from '../../components/form/form.component';
import { MemberModel } from '../../models/member.model';
import { CrudMemberService } from '../../services/crud-member.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  // dataUsers:any[] = [
  //   {id:1, name:'Luis', area:'Contabilidad'},
  //   {id:2, name:'Carla', area:'RRHH'},
  //   {id:3, name:'Fernanda', area:'Asistencia Social'},
  //   {id:4, name:'Luis', area:'Contabilidad'},
  //   {id:5, name:'Carla', area:'RRHH'},
  //   {id:6, name:'Fernanda', area:'Asistencia Social'},
  //   {id:7, name:'Luis', area:'Contabilidad'},
  //   {id:8, name:'Carla', area:'RRHH'},
  //   {id:9, name:'Fernanda', area:'Asistencia Social'},
  //   {id:10, name:'Luis', area:'Contabilidad'},
  //   {id:11, name:'Carla', area:'RRHH'},
  //   {id:12, name:'Fernanda', area:'Asistencia Social'},
  //   {id:13, name:'Luis', area:'Contabilidad'},
  //   {id:14, name:'Carla', area:'RRHH'},
  //   {id:15, name:'Fernanda', area:'Asistencia Social'},
  //   {id:16, name:'Luis', area:'Contabilidad'},
  //   {id:17, name:'Carla', area:'RRHH'},
  //   {id:18, name:'Fernanda', area:'Asistencia Social'},
  //   {id:19, name:'Luis', area:'Contabilidad'},
  //   {id:20, name:'Carla', area:'RRHH'},
  //   {id:21, name:'Fernanda', area:'Asistencia Social'},
  //   {id:22, name:'Luis', area:'Contabilidad'},
  //   {id:23, name:'Carla', area:'RRHH'},
  //   {id:24, name:'Fernanda', area:'Asistencia Social'},
  //   {id:25, name:'Luis', area:'Contabilidad'},
  //   {id:26, name:'Carla', area:'RRHH'},
  //   {id:27, name:'Fernanda', area:'Asistencia Social'},
  //   {id:28, name:'Luis', area:'Contabilidad'},
  //   {id:29, name:'Carla', area:'RRHH'},
  //   {id:30, name:'Fernanda', area:'Asistencia Social'},
  //   {id:31, name:'Luis', area:'Contabilidad'},
  //   {id:32, name:'Carla', area:'RRHH'},
  //   {id:33, name:'Fernanda', area:'Asistencia Social'},
  //   {id:34, name:'Luis', area:'Contabilidad'},
  //   {id:35, name:'Carla', area:'RRHH'},

  // ]

  dataTeam: MemberModel[] = []

  listFieldsTeam: string[] = ['id', 'name', 'age', 'cmp', 'title', 'university', 'speciality']

  metaDataColumns: MetaDataColumn[] = [
    { field: 'id', title: 'ID' },
    { field: 'name', title: 'MEDICO' },
    { field: 'cmp', title: 'CODIGO DE REGISTRO' },
    { field: 'age', title: 'EDAD' },
    { field: 'title', title: 'TÍTULO' },
    { field: 'university', title: 'UNIVERSIDAD' },
    { field: 'speciality', title: 'ESPECIALIDAD' },
  ]

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

  constructor(private utilsService: UtilsService, private crudMember: CrudMemberService) {
    this.changePage(0)
  }

  ngOnInit(): void {
  }

  changePage(page: number) {
    this.crudMember.getMembers().subscribe(response => {
      this.dataTeam = response
    })
  }

  openForm(row: any = null) {
    const options = {
      panelClass: 'panel-container',
      disableClose: true.valueOf,
      data: row
    }
    const reference: MatDialogRef<FormComponent> = this.utilsService.showFormModal(FormComponent, options)

    reference.afterClosed().subscribe((response) => {
      if (!response) { 
        return; 
      }
      if (row && row._id) {
        //api actualizar
        this.crudMember.updateMember(row._id, response).subscribe(() => {
          this.changePage(0);
        })
        return;
      }
      this.crudMember.addMember(response).subscribe(() => {
        this.changePage(0);
      })
    })
  }

  delete(row: any) {
    this.crudMember.deleteMember(row._id).subscribe(() => {
      this.changePage(0)
    })
  }

  doAction(action: string) {
    switch (action) {
      case 'DOWNLOAD':
        this.utilsService.showBottomSheet()
        break
      case 'NEW':
        this.openForm()
        break
    }
  }

}


