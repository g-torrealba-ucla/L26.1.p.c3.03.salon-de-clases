export default class Cl_mSalon {
    estudiantes = [];
    agregarEstudiante(Estudiante) {
        this.estudiantes.push(Estudiante);
    }
    cantidadEstudiantesProcesados() {
        return this.estudiantes.length;
    }
    ultimaEdad() {
        if (this.estudiantes.length === 0)
            return 0;
        return this.estudiantes[this.estudiantes.length - 1].edad;
    }
    nombresEdadSuperiorUltimo() {
        let nombres = [];
        const ultimaEdad = this.ultimaEdad();
        this.estudiantes.forEach((Estudiante) => {
            if (Estudiante.edad > ultimaEdad) {
                nombres.push(Estudiante.nombre);
            }
        });
        return nombres;
    }
    cantidadEstudiantesMayoresEdad() {
        let cnt = 0;
        this.estudiantes.forEach((Estudiante) => {
            if (Estudiante.edad >= 18)
                cnt += 1;
        });
        return cnt;
    }
    cantidadHombres() {
        let cnt = 0;
        this.estudiantes.forEach((Estudiante) => {
            if (Estudiante.sexo.toLowerCase() === "hombre")
                cnt += 1;
        });
        return cnt;
    }
    cantidadMujeres() {
        let cnt = 0;
        this.estudiantes.forEach((Estudiante) => {
            if (Estudiante.sexo.toLowerCase() === "mujer")
                cnt += 1;
        });
        return cnt;
    }
    comparacionGenero() {
        const hombres = this.cantidadHombres();
        const mujeres = this.cantidadMujeres();
        if (hombres > mujeres)
            return "hombres";
        if (mujeres > hombres)
            return "mujeres";
        return "por igual";
    }
}
//# sourceMappingURL=Cl_mSalon.js.map