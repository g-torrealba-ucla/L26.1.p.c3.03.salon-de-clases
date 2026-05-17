export default class Cl_mEstudiante {
  private _nombre: string = "";
  private _edad: number = 0;

  constructor({ nombre, edad }: { nombre: string; edad: number }) {
    this.nombre = nombre;
    this.edad = edad;
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
}
