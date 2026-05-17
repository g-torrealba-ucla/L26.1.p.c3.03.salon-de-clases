export default class Cl_mEstudiante {
    _nombre = "";
    _edad = 0;
    constructor({ nombre, edad }) {
        this.nombre = nombre;
        this.edad = edad;
    }
    set nombre(value) {
        this._nombre = value;
    }
    get nombre() {
        return this._nombre;
    }
    set edad(value) {
        this._edad = +value;
    }
    get edad() {
        return this._edad;
    }
}
//# sourceMappingURL=Cl_mEstudiante.js.map