import { Injectable } from "@angular/core";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { MatButton } from "@angular/material/button";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { DownloadComponent } from "../shared/components/download/download.component";
import { FormComponent } from "../team/components/form/form.component";

@Injectable({
    providedIn: 'root'
})

export class UtilsService{

    constructor(private bottomSheet:MatBottomSheet, private dialog:MatDialog){}

    showBottomSheet(){
        this.bottomSheet.open(DownloadComponent)
    }

    showFormModal(classComponent:any, options:{[s:string]:string|boolean|number|object}):MatDialogRef<any>{
        return this.dialog.open(classComponent, options)
    }

}