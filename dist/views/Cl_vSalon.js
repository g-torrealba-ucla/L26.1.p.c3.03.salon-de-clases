const html = String.raw;
export default class Cl_cSalon {
    lblCntEstudiantesProcesados;
    lblUltimaEdad;
    lblNombresEdadSuperiorUltimo;
    btNuevoEstudiante;
    tbEstudiantes;
    vista;
    constructor() {
        this.vista = document.getElementById("body");
        this.btNuevoEstudiante = document.getElementById("body_btNuevoEstudiante");
        this.lblCntEstudiantesProcesados = document.getElementById("body_lblCntEstudiantesProcesados");
        this.lblUltimaEdad = document.getElementById("body_lblUltimaEdad");
        this.lblNombresEdadSuperiorUltimo = document.getElementById("body_lblNombresEdadSuperiorUltimo");
        this.tbEstudiantes = document.getElementById("body_Estudiantes");
    }
    onNuevoEstudiante(callback) {
        this.btNuevoEstudiante.onclick = callback;
    }
    mostrarEstudiantes({ Estudiantes, cntEstudiantesProcesados, ultimaEdad, nombresEdadSuperiorUltimo, }) {
        this.tbEstudiantes.innerHTML = "";
        Estudiantes.forEach((Estudiante) => {
            const tr = document.createElement("tr");
            tr.innerHTML = html `
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
//# sourceMappingURL=Cl_vSalon.js.map