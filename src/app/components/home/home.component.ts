import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotesService } from '../../shared/services/notes.service';
import { Notes } from '../../shared/interfaces/notes';

import { SearchPipe } from '../../shared/pipes/search.pipe';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, SearchPipe,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private _NotesService = inject(NotesService);
  searchValue:string = ''
  notesList:WritableSignal<Notes[]> = signal([]);
  noteForm = new FormGroup({
    title: new FormControl(null, Validators.required),
    content: new FormControl(null, Validators.required)
  })

  noteFormUpdate = new FormGroup({
    title: new FormControl(null, Validators.required),
    content: new FormControl(null, Validators.required)
  })
  updateNote(note:any){
    this.noteFormUpdate.patchValue(note)
  }
  onSubmitUpdate(id:string){
    this._NotesService.updateNote(id, this.noteFormUpdate.value).subscribe({
      next:(res)=>{
        if(res.msg === "done"){
          this.getNote();
        }
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
  ngOnInit(): void {
    this.getNote()
  }
  onSubmit(){
    this._NotesService.addNote(this.noteForm.value).subscribe({
      next: (res)=>{
        if(res.msg == "done"){
          this.noteForm.reset();
          this.getNote();
        }
      },
      error: (err)=>{
        console.log(err)
      }
    })
  }

  getNote(){
    this._NotesService.getUserNotes().subscribe({
      next:(res)=>{
        if(res.msg === "done"){
          
          this.notesList.set(res.notes)
        }
      },
      error:(err)=>{
        if(err.error.msg ==="not notes found"){
          console.log("HII");
          console.log(this.notesList())
          this.notesList.set([]);
        }
        console.log(err);
      }
    })
  }
  deleteNote(id:string){
    this._NotesService.deleteNote(id).subscribe({
      next:(res)=>{
        if(res.msg == "done"){
          this.getNote()
        }
      },
      error: (err)=>{
       
      }
    })
  }
}
