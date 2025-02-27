import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { MultiSelectModule } from 'primeng/multiselect';
import { DatePickerModule } from 'primeng/datepicker';
import { SongEntity } from '../../../entities/songs/song.interface';

@Component({
  selector: 'app-edit-song',
  standalone: true,
  imports: [SelectModule, MultiSelectModule,ReactiveFormsModule, FormsModule, DatePickerModule],
  templateUrl: './edit-song.component.html',
  styleUrl: './edit-song.component.scss'
})
export class EditSongComponent implements OnInit{
    songForm: FormGroup
  @Input() song: SongEntity
  @Input() countries: any[] =[]
  @Input() artists: any[]=[]
  @Input() genres: any[]=[]
  @Input() companies: any[]=[]
  @Output() songFormValues = new EventEmitter<any>(); 
  @Output() songDelete = new EventEmitter<any>(); 
  countryName
  songCompanyName
  isEditing = false; 
  editForm!: FormGroup;
  selectedCountry: any
  
  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    //Suponiendo que el país de la canción es el país del artista
    this.countryName = this.artists.find(x=>x.id== this.song.artist)
    this.songCompanyName = this.companies.find(x => x.songs.some(songId => songId === Number(this.song.id))) ?? null;

    this.selectedCountry = this.countries.find(x=> x.name == this.countryName.bornCity)
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;

    this.editForm = this.fb.group({
      genre: [],
      company: [this.songCompanyName],
      country: [this.selectedCountry],
      yearSelected: [new Date(this.song.year,0,1)] 
    });
  }
  
  saveChanges() {
      this.song = { ...this.song, ...this.editForm.value };
      this.songFormValues.emit(this.song)

      this.isEditing = false; 
  }

  deleteSong(){
    this.songDelete.emit(this.song.id);
  }
}
