export interface IDepartamento {
  ID: number;
  nomDepartamento: string;

}
export class Departamento implements IDepartamento {
  constructor(
    public ID: number,
    public nomDepartamento: string
  ) {}
}
