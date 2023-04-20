import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Departamento } from '../IDepartamento';
import { DepartamentoService } from '../Departamento.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ElegirDepartamento',
  templateUrl: './ElegirDepartamento.component.html',
  styleUrls: ['./ElegirDepartamento.component.css']
})
export class ElegirDepartamentoComponent implements OnInit {


  @Output()
  departamentoElegido: EventEmitter<number> = new EventEmitter<number>();

  eleccion: number = 0;

  departamentos: Departamento[]

  constructor(private departamentosService: DepartamentoService, private activatedRoute : ActivatedRoute) {
    this.departamentos = []
  }

  ngOnInit() {
    this.departamentosService.getDepartamentos().subscribe((datosDepartamentos) => this.departamentos = datosDepartamentos);
  }

  alCambiar(){
    this.departamentoElegido.emit(this.eleccion);
  }

}
