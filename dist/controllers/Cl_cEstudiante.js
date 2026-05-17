import Cl_mEstudiante from "../models/Cl_mEstudiante.js";
export default class Cl_cEstudiante {
    vista;
    callback;
    constructor(vista) {
        this.vista = vista;
        // El controlador se suscribe a los eventos de la interfaz
        this.vista.onCancelar(() => this.btCancelarOnClick());
        this.vista.onAceptar(() => this.btAceptarOnClick());
    }
    // Método para que la Curso llame a este controlador
    solicitarEstudiante(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    btCancelarOnClick() {
        this.callback(null);
        this.vista.ocultar();
    }
    btAceptarOnClick() {
        this.callback(new Cl_mEstudiante({
            nombre: this.vista.nombre,
            edad: this.vista.edad,
        }));
        this.vista.ocultar();
    }
}
//# sourceMappingURL=Cl_cEstudiante.js.map