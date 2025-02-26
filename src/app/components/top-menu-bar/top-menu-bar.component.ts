import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Drawer, DrawerModule } from 'primeng/drawer';
import { MockService } from '../../services/mock.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../enviroments/environment';
import { SongsComponent } from '../songs/songs.component';
import { ArtistsComponent } from '../artists/artists.component';
import { RouterOutlet } from '@angular/router';
import { ComunicaionService } from '../../services/comunication.service';
@Component({
  selector: 'app-top-menu-bar',
  standalone: true,
  imports: [ RouterOutlet, CommonModule, ButtonModule, DrawerModule, SongsComponent, ArtistsComponent],
  templateUrl: './top-menu-bar.component.html',
  styleUrl: './top-menu-bar.component.scss'
})
export class TopMenuBarComponent implements OnInit{
  constructor(
    public  test:MockService, 
    private router: Router, private comunicationService: ComunicaionService)
    {}

    lastSegment = ''
  typeItem:any
  menuListItems = [{title:'Inicio', route:'/home'},{title:'Canciones', route:'/songs'},{title:'Artistas', route:'/artists'},{title:'Compañías discográficas', route:'/companies'}]
  ngOnInit(): void {
  }
  @ViewChild('drawerRef') drawerRef!: Drawer;
  visible: boolean = false;

  closeCallback(e: any): void {
      this.drawerRef.close(e);
  }
  onOptionSelect(item: any) {
    this.typeItem= item
    this.comunicationService.actualizarMensaje(item); 
    const fullUrl = `${environment.apiBaseUrl}${item.route}`;
    window.location.href = fullUrl;  
  }
}
