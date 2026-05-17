import { I_vSalon } from "../interfaces/I_vSalon";
import Cl_mEstudiante from "../models/Cl_mEstudiante";

const html = String.raw;

export default class Cl_cSalon implements I_vSalon {
  lblCntEstudiantesProcesados: HTMLLabelElement;
  lblUltimaEdad: HTMLLabelElement;
  lblNombresEdadSuperiorUltimo: HTMLLabelElement;
  btNuevoEstudiante: HTMLButtonElement;
  tbEstudiantes: HTMLTableElement;
  vista: HTMLElement | null;
  constructor() {
    this.vista = document.getElementById("body");
    this.btNuevoEstudiante = document.getElementById(
      "body_btNuevoEstudiante",
    ) as HTMLButtonElement;
    this.lblCntEstudiantesProcesados = document.getElementById(
      "body_lblCntEstudiantesProcesados",
    ) as HTMLLabelElement;
    this.lblUltimaEdad = document.getElementById(
      "body_lblUltimaEdad",
    ) as HTMLLabelElement;
    this.lblNombresEdadSuperiorUltimo = document.getElementById(
      "body_lblNombresEdadSuperiorUltimo",
    ) as HTMLLabelElement;
    this.tbEstudiantes = document.getElementById(
      "body_Estudiantes",
    ) as HTMLTableElement;
  }
  onNuevoEstudiante(callback: () => void): void {
    this.btNuevoEstudiante.onclick = callback;
  }
  mostrarEstudiantes({
    Estudiantes,
    cntEstudiantesProcesados,
    ultimaEdad,
    nombresEdadSuperiorUltimo,
  }: {
    Estudiantes: Cl_mEstudiante[];
    cntEstudiantesProcesados: number;
    ultimaEdad: number;
    nombresEdadSuperiorUltimo: string;
  }): void {
    this.tbEstudiantes.innerHTML = "";
    Estudiantes.forEach((Estudiante) => {
      const tr = document.createElement("tr");
      tr.innerHTML = html`
        <td>${Estudiante.nombre}</td>
        <td>${Estudiante.edad}</td>
      `;
      this.tbEstudiantes.appendChild(tr);
    });
    this.lblCntEstudiantesProcesados.innerHTML =
      cntEstudiantesProcesados.toString();
    this.lblUltimaEdad.innerHTML = ultimaEdad.toString();
    this.lblNombresEdadSuperiorUltimo.innerHTML = nombresEdadSuperiorUltimo;
  }
  mostrar(): void {
    if (this.vista === null) return;
    this.vista.hidden = false;
  }
  ocultar(): void {
    if (this.vista === null) return;
    this.vista.hidden = true;
  }
}
