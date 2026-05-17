import { I_vEstudiante } from "../interfaces/I_vEstudiante";

export default class Cl_cEstudiantePlain implements I_vEstudiante {
  inNombre: HTMLInputElement;
  inEdad: HTMLInputElement;
  btCancelar: HTMLButtonElement;
  btAceptar: HTMLButtonElement;
  vista: HTMLElement;
  constructor() {
    this.vista = document.getElementById("Estudiante") as HTMLElement;
    this.inNombre = document.getElementById(
      "Estudiante_inNombre",
    ) as HTMLInputElement;
    this.inEdad = document.getElementById(
      "Estudiante_inEdad",
    ) as HTMLInputElement;
    this.btCancelar = document.getElementById(
      "Estudiante_btCancelar",
    ) as HTMLButtonElement;
    this.btAceptar = document.getElementById(
      "Estudiante_btAceptar",
    ) as HTMLButtonElement;
  }
  get nombre(): string {
    return this.inNombre.value.trim();
  }
  get edad(): number {
    return parseInt(this.inEdad.value.trim());
  }

  onAceptar(callback: () => void): void {
    this.btAceptar.onclick = callback;
  }
  onCancelar(callback: () => void): void {
    this.btCancelar.onclick = callback;
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
