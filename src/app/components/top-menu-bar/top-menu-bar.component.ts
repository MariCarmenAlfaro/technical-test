import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Drawer, DrawerModule } from 'primeng/drawer';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../enviroments/environment';
import { SongsComponent } from '../songs/songs.component';
import { ArtistsComponent } from '../artists/artists.component';
import { RouterOutlet } from '@angular/router';
import { TopMenuBarService } from '../../services/top-menu-bar.service';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-top-menu-bar',
  standalone: true,
  imports: [ RouterOutlet, CommonModule, ButtonModule, DrawerModule, SongsComponent, ArtistsComponent, TranslateModule],
  templateUrl: './top-menu-bar.component.html',
  styleUrl: './top-menu-bar.component.scss'
})
export class TopMenuBarComponent implements OnInit{
  constructor(private router: Router, private topMenuBarService: TopMenuBarService)
    {}
    lastSegment = ''
    typeItem:any
    menuListItems = []
  ngOnInit(): void {
    this.topMenuBarService.getAllItems().subscribe((rs)=>{
      this.menuListItems = rs
    })
  }
  @ViewChild('drawerRef') drawerRef!: Drawer;
  visible: boolean = false;

  closeCallback(e: any): void {
      this.drawerRef.close(e);
  }
  onOptionSelect(item: any) {
    this.typeItem= item
    const fullUrl = `${environment.webBaseUrl}${item.route}`;
    window.location.href = fullUrl;  
  }
}
