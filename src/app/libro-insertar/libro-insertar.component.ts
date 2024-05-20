import { Component } from '@angular/core';

@Component({
  selector: 'app-libro-insertar',
  standalone: true,
  imports: [],
  templateUrl: './libro-insertar.component.html',
  styleUrl: './libro-insertar.component.css'
})
export class LibroInsertarComponent {
  libro = {
    titulo: '',
    autor: '',
    ano: null,
    genero: '',
    imagen: null as File | null
  };

  onSubmit() {
    console.log(this.libro);
  }

  onImageChange(event: Event) {
    const element = event.target as HTMLInputElement;
    if (element.files && element.files.length > 0) {
      const file = element.files[0];
      this.libro.imagen = file;
    }
  }
  
}
