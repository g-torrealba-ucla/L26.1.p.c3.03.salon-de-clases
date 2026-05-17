import Cl_mEstudiante from "../models/Cl_mEstudiante";

// src/interfaces/I_vCurso.ts
export interface I_vSalon {
  // En lugar de exponer el botón HTML, exponemos una acción
  onNuevoEstudiante(callback: () => void): void;
  mostrarEstudiantes({
    Estudiantes,
    cntEstudiantesProcesados,
    ultimaEdad,
    nombresEdadSuperiorUltimo,
  }: {
    Estudiantes: Cl_mEstudiante[];
    cntEstudiantesProcesados: number;
    ultimaEdad: number;
    nombresEdadSuperiorUltimo: string[];
  }): void;
}
