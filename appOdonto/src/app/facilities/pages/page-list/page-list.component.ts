import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  title="Buccale";
  position={
    lat: -1.2493307836668759, 
    lng: -78.6329074468122,
  };
  label={
    color:'white',
    text:'Buccale'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
