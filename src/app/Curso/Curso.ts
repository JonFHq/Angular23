export interface ICurso {
  ID: number;
  nomCurso: string;

}
export class Curso implements ICurso {
  constructor(
    public ID: number,
    public nomCurso: string
  ) {}
}
