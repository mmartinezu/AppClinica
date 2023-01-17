import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

interface IIcon{
  name: string
  path: string
}

@Injectable({
  providedIn: 'root'
})
export class IconService {

  private listIcons:IIcon[] = [
    {name: 'about', path: '../assets/icons/about.svg'},
    {name: 'team', path: '../assets/icons/team.svg'},
    {name: 'facilities', path: '../assets/icons/facilities.svg'},
    {name: 'treatments', path: '../assets/icons/treatments.svg'},
    {name: 'appointments', path: '../assets/icons/appointments.svg'}
  ]

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer:DomSanitizer) { 
    this.registryIcons()
  }

  registryIcons(){
    this.listIcons.forEach((icon) => {
      this.matIconRegistry.addSvgIcon(
        icon.name,
        this.domSanitizer.bypassSecurityTrustResourceUrl(icon.path)
      )
    });
  }
}
