import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profesor } from '../Profesor/IProfesor';
import { ProfesorService } from '../Profesor/Profesor.service';

@Component({
  selector: 'app-Departamento',
  templateUrl: './Departamento.component.html',
  styleUrls: ['./Departamento.component.css']
})
export class DepartamentoComponent implements OnInit {

  departamentoSeleccionado: number;
  profesores: Profesor[];

  constructor(private profesoresService: ProfesorService, private activatedRoute: ActivatedRoute) {
    this.departamentoSeleccionado = 0;
    this.profesores = []

  }

  ngOnInit() {
  }

  ElegirDepartamento(departamentoSeleccionado: number): void {

    this.profesoresService.getProfesores().subscribe(datosProfesores => {
      this.profesores = datosProfesores.filter(profesor => profesor.departamentoID == departamentoSeleccionado);
    });
    console.log("Departamento seleccionado: " + departamentoSeleccionado);
    console.log(this.profesores);
  }
}
