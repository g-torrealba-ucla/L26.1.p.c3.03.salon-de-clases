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
}
