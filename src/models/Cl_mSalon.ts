import Cl_mEstudiante from "./Cl_mEstudiante.js";

export default class Cl_mSalon {
  public estudiantes: Cl_mEstudiante[] = [];

  agregarEstudiante(Estudiante: Cl_mEstudiante) {
    this.estudiantes.push(Estudiante);
  }

  cantidadEstudiantesProcesados(): number {
    return this.estudiantes.length;
  }
  ultimaEdad(): number {
    if (this.estudiantes.length === 0) return 0;
    return this.estudiantes[this.estudiantes.length - 1].edad;
  }
  nombresEdadSuperiorUltimo(): string[] {
    let nombres: string[] = [];
    const ultimaEdad = this.ultimaEdad();
    this.estudiantes.forEach((Estudiante) => {
      if (Estudiante.edad > ultimaEdad) {
        nombres.push(Estudiante.nombre);
      }
    });
    return nombres;
  }
  cantidadEstudiantesMayoresEdad(): number {
    let cnt = 0;
    this.estudiantes.forEach((Estudiante) => {
      if (Estudiante.edad >= 18) cnt += 1;
    });
    return cnt;
  }

  cantidadHombres(): number {
    let cnt = 0;
    this.estudiantes.forEach((Estudiante) => {
      if (Estudiante.sexo.toLowerCase() === "hombre") cnt += 1;
    });
    return cnt;
  }


  cantidadMujeres(): number {
    let cnt = 0;
    this.estudiantes.forEach((Estudiante) => {
      if (Estudiante.sexo.toLowerCase() === "mujer") cnt += 1;
    });
    return cnt;
  }

  comparacionGenero(): string {
    const hombres = this.cantidadHombres();
    const mujeres = this.cantidadMujeres();
    if (hombres > mujeres) return "hombres";
    if (mujeres > hombres) return "mujeres";
    return "por igual";
  }
}
