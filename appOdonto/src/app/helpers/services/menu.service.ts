import { Injectable } from '@angular/core';

export interface IMenu{
  title: string
  url: string
  icon: string
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private listMenu: IMenu[] = [
    {title:'Quienes somos?', url:'/about', icon:'about'},
    {title:'Nuestro equipo', url:'/team', icon:'team'},
    {title:'Instalaciones', url:'/facilities', icon:'facilities'},
    {title:'Tratamientos', url:'/treatments', icon:'treatments'},
    {title:'Citas', url:'/appointments', icon:'appointments'}
  ]

  constructor() { }

  getMenu(): IMenu[]{
    return [...this.listMenu]
  }

  getMenuByUrl(url:string):IMenu{
    return this.listMenu.find(
      (menu) => menu.url.toLowerCase() === url.toLowerCase()
    ) as IMenu   
  } 
  
}
