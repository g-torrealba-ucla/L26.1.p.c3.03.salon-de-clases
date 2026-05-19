export default class Cl_mEstudiante {
    _nombre = "";
    _edad = 0;
    _sexo = "";
    constructor({ nombre, edad, sexo, }) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
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
    set sexo(value) {
        this._sexo = value.trim();
    }
    get sexo() {
        return this._sexo;
    }
}
//# sourceMappingURL=Cl_mEstudiante.js.map