import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'app-create-song',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, DatePickerModule],
  templateUrl: './create-song.component.html',
  styleUrl: './create-song.component.scss'
})
export class CreateSongComponent implements OnInit{
  songForm: FormGroup
  @Input() countries: any[] =[]
  @Input() artists: any[]=[]
  @Input() genres: any[]=[]
  @Input() companies: any[]=[]
  @Output() songFormValues = new EventEmitter<any>(); 


  constructor(private fb: FormBuilder ){ }
  ngOnInit(): void {
    this.songForm = this.fb.group({
      title: ['', Validators.required],
      artist: ['', Validators.required],
      genre: [[], Validators.required],
      recordLabel: [[], Validators.required],
      country: ['', Validators.required],
      year: [null, [Validators.required]],
      rating: [null, [Validators.required]]
    });
  }

  saveNewSong() {
    this.songFormValues.emit(this.songForm.value)
  }
}
