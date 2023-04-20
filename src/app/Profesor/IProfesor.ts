export interface IProfesor {
  ID: number;
  nombre: string;
  apellidos: string;
  fIngreso: string;
  titulacion: number;
  departamentoID: number;
}

export class Profesor implements IProfesor {

  constructor(
    public ID: number,
    public nombre: string,
    public apellidos: string,
    public fIngreso: string,
    public titulacion: number,
    public departamentoID: number
  ) {}

}
