import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-create-song',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, DatePickerModule, ButtonModule,SelectModule, MultiSelectModule],
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
      company: [[], Validators.required],
      country: ['', Validators.required],
      year: [null, [Validators.required]],
      rating: [null, [Validators.required]]
    });
  }

  saveNewSong() {
    this.songFormValues.emit(this.songForm.value)
  }
}
