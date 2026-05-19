export default class Cl_cEstudiantePlain {
    inNombre;
    inEdad;
    inSexo;
    btCancelar;
    btAceptar;
    vista;
    constructor() {
        this.vista = document.getElementById("Estudiante");
        this.inNombre = document.getElementById("Estudiante_inNombre");
        this.inEdad = document.getElementById("Estudiante_inEdad");
        this.inSexo = document.getElementById("Estudiante_inSexo");
        this.btCancelar = document.getElementById("Estudiante_btCancelar");
        this.btAceptar = document.getElementById("Estudiante_btAceptar");
    }
    get nombre() {
        return this.inNombre.value.trim();
    }
    get edad() {
        return parseInt(this.inEdad.value.trim());
    }
    get sexo() {
        return this.inSexo.value;
    }
    onAceptar(callback) {
        this.btAceptar.onclick = callback;
    }
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
    }
    mostrar() {
        if (this.vista === null)
            return;
        this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista === null)
            return;
        this.vista.hidden = true;
    }
}
//# sourceMappingURL=Cl_vEstudiante.js.map