import { Component, inject, input, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Movie } from '../../models';

@Component({
  selector: 'app-child-edit-movie',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './child-edit-movie.component.html',
  styleUrl: './child-edit-movie.component.css',
})
export class ChildEditMovieComponent {
  movieForm = inject(FormBuilder).group({
    id: [0],
    title: ['', Validators.required],
    description: ['', Validators.required],
  });

  public requestToSave = output<Movie>();
  public requestToCancel = output();
  public buttonSaveTitle = input.required();

  saveToParent(): void {
    this.requestToSave.emit(this.movieForm.value as Movie);
  }

  clickToCancel(): void {
    this.requestToCancel.emit();
  }
}
