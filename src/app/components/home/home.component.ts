import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotesService } from '../../shared/services/notes.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private _NotesService = inject(NotesService)
  noteForm = new FormGroup({
    title: new FormControl(null, Validators.required),
    content: new FormControl(null, Validators.required)
  })

  onSubmit(){
    this._NotesService.addNote(this.noteForm.value).subscribe({
      next: (res)=>{
        if(res.msg == "done"){
          
        }
      },
      error: (err)=>{
        console.log(err)
      }
    })
  }
}
