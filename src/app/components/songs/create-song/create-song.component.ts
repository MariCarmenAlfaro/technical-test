import { Component, OnInit } from '@angular/core';
import { SongsService } from '../../../services/songs.service';

@Component({
  selector: 'app-create-song',
  standalone: true,
  imports: [],
  templateUrl: './create-song.component.html',
  styleUrl: './create-song.component.scss'
})
export class CreateSongComponent implements OnInit{
  constructor(private songservice: SongsService){

  }
  ngOnInit(): void {

  }

}
