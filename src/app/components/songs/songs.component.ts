import { Component, OnInit } from '@angular/core';
import { SongEntity } from '../../entities/songs/song.interface';
import { ArtistEntity } from '../../entities/artists/artist.interface';
import { CompaniesEntity } from '../../entities/companies/companies.interface';
import { SongsService } from '../../services/songs.service';
import { ArtistsService } from '../../services/artists.service';
import { CompaniesService } from '../../services/companies.service';
import { CreateSongComponent } from './create-song/create-song.component';
import { CountriesService } from '../../services/countries.service';
import { GenresService } from '../../services/genres.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-songs',
  standalone: true,
  imports: [CreateSongComponent,ToastModule],
  templateUrl: './songs.component.html',
  styleUrl: './songs.component.scss',
})
export class SongsComponent implements OnInit {
  songsList: SongEntity[] = [];
  artistsList: ArtistEntity[] = [];
  companiesList: CompaniesEntity[] = [];
  countriesList: any[] = [];
  genresList: any[] = [];
  newSong: boolean = false;

  constructor(
    private songsService: SongsService,
    private artistsService: ArtistsService,
    private companiesService: CompaniesService,
    private countriesService: CountriesService,
    private genresServices: GenresService,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.readAllSongs();
    this.countriesService.getAllCountries().subscribe((rs) => {
      this.countriesList = rs;
    });
    this.companiesService.getAllCompanies().subscribe((rs) => {
      this.companiesList = rs;
    });
    this.genresServices.getAllGenre().subscribe((rs) => {
      this.genresList = rs;
    });
    this.artistsService.getAllArtists().subscribe((rs) => {
      this.artistsList = rs;
      this.songsList.forEach((s) => {
        var artist = this.artistsList.find((x) => Number(x.id) == s.artist);
        s.artistName = artist ? artist.name : '';
      });
    });
  }

  readAllSongs(){
    this.songsService.getAllSongs().subscribe((rs) => {
      this.songsList = rs;
    });

  }
  createNewSong(rq) {
    var request =     {
      "title": rq.title,
      "genre": rq.genre,
      "poster": "http://dummyimage.com/400x600.png/dddddd/000000",
      "duration":0,
      "year": new Date(rq.year).getFullYear(),
      "rating": rq.rating,
      "artist": Number(rq.artist)
    }
    this.songsService.postSongs(request).subscribe((rs)=>{
      if(rs != null){
        this.messageService.add({ severity: 'success', detail: 'Canción guardada' });
        this.newSong = false;
        this.readAllSongs();
      }
    })
  }

  // editSong($event){

  // }
}
