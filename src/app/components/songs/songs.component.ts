import { Component, OnInit } from '@angular/core';
import { ComunicaionService } from '../../services/comunication.service';
import { Subscription } from 'rxjs';
import { MockService } from '../../services/mock.service';
import { SongEntity } from '../../entities/songs/song.interface';
import { ArtistEntity } from '../../entities/artists/artist.interface';

@Component({
  selector: 'app-songs',
  standalone: true,
  imports: [],
  templateUrl: './songs.component.html',
  styleUrl: './songs.component.scss'
})
export class SongsComponent implements OnInit {
  title=""
  private subscription: Subscription = new Subscription;
  songsList: SongEntity[] = []
  artistsList: ArtistEntity[] = []

  constructor(private comunicationService: ComunicaionService, private mockService: MockService){

  }
  ngOnInit(): void {
    this.subscription = this.comunicationService.mensaje$.subscribe(m => {
      this.title = m; 
      console.log(this.title) 
    });
    this.mockService.getSongs().subscribe((rs)=>{
      this.songsList = rs
      console.log(this.songsList)
    })
    this.mockService.getArtists().subscribe((rs)=>{
      this.artistsList = rs
      console.log(this.artistsList)   
        this.songsList.forEach(s => {
        var artist = this.artistsList.find(x => Number(x.id) == s.artist); 
        s.artistName = artist ? artist.name : '';
      });
    })
 
  }

}
