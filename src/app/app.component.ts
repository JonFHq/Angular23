import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
<div class="p-5">
    <nav class="navbar navbar-expand-lg fixed-top row">
        <a routerLink="alumno" class="nav-link" exact>Alumnos</a>
        <a routerLink="profesor" class="nav-link" exact>Profesores</a>
        <a routerLink="carrera" class="nav-link" exact>Carreras</a>
        <a routerLink="curso" class="nav-link" exact>Cursos</a>
    </nav>
    <router-outlet></router-outlet>
</div>
  `,


  styleUrls: ['./app.component.css'],
})


export class AppComponent {
  aplicarClases: string = 'italic negrita';
  aplicarNegrita: boolean = true;
  aplicarColor: boolean = true;

  addClases() {
    let clases = {
      negrita : this.aplicarNegrita,
      color : this.aplicarColor
    }
    return clases;
  }

  visible: boolean = true;

  onclick() {
    this.visible = !this.visible;
  }

  alternarVisible() {
    this.visible = !this.visible;
  }

  encabezado: string = "";
  nombre: string = 'Perico';
  apellidos: string = 'Palotes';
  imagen: string = 'https://www.lectiva.com/assets/es/logos/centro/id/73750/size/m.jpg';
  desactivado: boolean = false;

  getNombreCompleto(): string {
    return this.nombre + ' ' + this.apellidos;
  }
}

