import { I_vEstudiante } from "../interfaces/I_vEstudiante.js";
import Cl_mEstudiante from "../models/Cl_mEstudiante.js";

export default class Cl_cEstudiante {
  private vista: I_vEstudiante;
  private callback!: (Estudiante: Cl_mEstudiante | null) => void;
  constructor(vista: I_vEstudiante) {
    this.vista = vista;
    // El controlador se suscribe a los eventos de la interfaz
    this.vista.onCancelar(() => this.btCancelarOnClick());
    this.vista.onAceptar(() => this.btAceptarOnClick());
  }
  // Método para que la Curso llame a este controlador
  solicitarEstudiante(callback: (Estudiante: Cl_mEstudiante | null) => void) {
    this.callback = callback;
    this.vista.mostrar();
  }
  private btCancelarOnClick() {
    this.callback(null);
    this.vista.ocultar();
  }
  private btAceptarOnClick() {
    this.callback(
      new Cl_mEstudiante({
        nombre: this.vista.nombre,
        edad: this.vista.edad,
      }),
    );
    this.vista.ocultar();
  }
}
