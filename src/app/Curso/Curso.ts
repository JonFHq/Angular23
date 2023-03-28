export interface Curso {
  ID: number;
  nomCurso: string;

}
export class Curso {
  constructor(
    public ID: number,
    public nomCurso: string
  ) {}
}
