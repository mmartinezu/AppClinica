import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { ContainerComponent } from './components/container/container.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import { TableComponent } from './components/table/table.component'; 
import {MatTableModule} from '@angular/material/table'; 
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { CardComponent } from './components/card/card.component';
import {MatPaginatorModule} from '@angular/material/paginator'; 
import { PaginatorComponent } from './components/paginator/paginator.component';
import { DownloadComponent } from './components/download/download.component';
import { KeypadComponent } from './components/keypad/keypad.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import { ReactiveFormsModule } from '@angular/forms';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX:false
}

@NgModule({
  declarations: [
    TitleComponent,
    ContainerComponent,
    TableComponent,
    CardComponent,
    PaginatorComponent,
    DownloadComponent,
    KeypadComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatDialogModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,

  ],
  exports: [
    TitleComponent,
    ContainerComponent,
    TableComponent,
    PaginatorComponent,
    PerfectScrollbarModule,
    DownloadComponent,
    KeypadComponent,
    MatIconModule,
    MatTooltipModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class SharedModule { }
