import { Component, OnInit } from '@angular/core';
import { ProfesorService } from './Profesor.service';
import { Profesor } from './IProfesor';
import { CarreraService } from '../Carrera/Carrera.service';
import { Carrera } from '../Carrera/Carrera';
import { DepartamentoService } from '../Departamento/Departamento.service';
import { Departamento } from '../Departamento/IDepartamento';

@Component({
  selector: 'app-Profesor',
  templateUrl: './Profesor.component.html',
  styleUrls: ['./Profesor.component.css']
})
export class ProfesorComponent implements OnInit {

  profesores: Profesor[];
  carreras: Carrera[];
  departamentos: Departamento[];

  constructor(private service: ProfesorService, private carreraService: CarreraService, private departamentoService: DepartamentoService) {
    this.profesores = [];
    this.carreras = [];
    this.departamentos = [];
  }

  ngOnInit() {
    this.service.getProfesores().subscribe((datosProfesores) => this.profesores = datosProfesores);
    this.carreraService.getCarreras().subscribe((datosCarreras) => this.carreras = datosCarreras);
    this.departamentoService.getDepartamentos().subscribe((datosDepartamentos) => this.departamentos = datosDepartamentos);
   }

}
