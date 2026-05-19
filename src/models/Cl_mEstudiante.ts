export default class Cl_mEstudiante {
  private _nombre: string = "";
  private _edad: number = 0;
  private _sexo: string = "";

  constructor({
    nombre,
    edad,
    sexo,
  }: {
    nombre: string;
    edad: number;
    sexo: string;
  }) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
  }

  set nombre(value: string) {
    this._nombre = value;
  }
  get nombre(): string {
    return this._nombre;
  }

  set edad(value: number) {
    this._edad = +value;
  }
  get edad(): number {
    return this._edad;
  }

  set sexo(value: string) {
    this._sexo = value.trim();
  }
  get sexo(): string {
    return this._sexo;
  }
}
