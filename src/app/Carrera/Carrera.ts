export interface ICarrera {
  ID: number;
  titulo: string;

}
export class Carrera {
  constructor(
    public ID: number,
    public titulo: string
  ) {}
}
