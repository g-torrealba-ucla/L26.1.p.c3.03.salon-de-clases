/**
 * 1.	SALÓN DE CLASES
 * Sea un salón de clases en el DCyT, donde se procesan los datos de cada estudiante (nombre,
 * edad). Se desean procesar estos registros de estudiantes para determinar: a. la edad promedio,
 * b. el nombre del estudiante con mayor edad y c. la cantidad de estudiantes mayores de edad.
 */

import Cl_mSalon from "../models/Cl_mSalon.js";
import { I_vSalon } from "../interfaces/I_vSalon.js";
import Cl_cEstudiante from "./Cl_cEstudiante.js";
import Cl_mEstudiante from "../models/Cl_mEstudiante.js";

export default class Cl_cSalon {
  private mSalon: Cl_mSalon = new Cl_mSalon();
  private vSalon: I_vSalon;
  private cEstudiante: Cl_cEstudiante;

  // Recibe la vista de la bodega y el controlador del Estudiante ya armado
  constructor(vistaSalon: I_vSalon, controladorEstudiante: Cl_cEstudiante) {
    this.vSalon = vistaSalon;
    this.cEstudiante = controladorEstudiante;

    this.cargarEstudiantesIniciales();
    this.vSalon.onNuevoEstudiante(() => this.procesar1Estudiante());
  }

  private cargarEstudiantesIniciales() {
    const alumnos = [
      { nombre: "Luis", edad: 16, sexo: "hombre" },
      { nombre: "Ana", edad: 19, sexo: "mujer" },
      { nombre: "José", edad: 20, sexo: "hombre" },
      { nombre: "Carmen", edad: 18, sexo: "mujer" },
    ];

    alumnos.forEach((alumno) => {
      this.mSalon.agregarEstudiante(
        new Cl_mEstudiante({
          nombre: alumno.nombre,
          edad: alumno.edad,
          sexo: alumno.sexo,
        }),
      );
    });

    this.vSalon.mostrarEstudiantes({
      Estudiantes: this.mSalon.estudiantes,
      cntEstudiantesProcesados: this.mSalon.cantidadEstudiantesProcesados(),
      ultimaEdad: this.mSalon.ultimaEdad(),
      nombresEdadSuperiorUltimo: this.mSalon.nombresEdadSuperiorUltimo(),
      cntEstudiantesMayoresEdad: this.mSalon.cantidadEstudiantesMayoresEdad(),
      generoComparacion: this.mSalon.comparacionGenero(),
    });
  }

  private procesar1Estudiante() {
    this.cEstudiante.solicitarEstudiante((Estudiante) => {
      if (Estudiante !== null) {
        this.mSalon.agregarEstudiante(Estudiante);
        this.vSalon.mostrarEstudiantes({
          Estudiantes: this.mSalon.estudiantes,
          cntEstudiantesProcesados: this.mSalon.cantidadEstudiantesProcesados(),
          ultimaEdad: this.mSalon.ultimaEdad(),
          nombresEdadSuperiorUltimo: this.mSalon.nombresEdadSuperiorUltimo(),
          cntEstudiantesMayoresEdad:
            this.mSalon.cantidadEstudiantesMayoresEdad(),
          generoComparacion: this.mSalon.comparacionGenero(),
        });
      }
    });
  }
}
