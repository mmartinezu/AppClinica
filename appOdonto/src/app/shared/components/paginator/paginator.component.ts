import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Input() length!: any;
  @Output() onNextPage:EventEmitter<number[] >= new EventEmitter<number[]>()

  constructor() { }

  ngOnInit(): void {
  }

  OnPageChange(event: PageEvent)
  {
    this.onNextPage.emit([event.pageIndex, event.pageSize])
  }

}
