export default class Cl_mSalon {
    Estudiantes = [];
    agregarEstudiante(Estudiante) {
        this.Estudiantes.push(Estudiante);
    }
    cantidadEstudiantesProcesados() {
        return this.Estudiantes.length;
    }
    ultimaEdad() {
        if (this.Estudiantes.length === 0)
            return 0;
        return this.Estudiantes[this.Estudiantes.length - 1].edad;
    }
    nombresEdadSuperiorUltimo() {
        if (this.Estudiantes.length <= 1)
            return "";
        const ultimaEdad = this.ultimaEdad();
        return this.Estudiantes.slice(0, -1)
            .filter((Estudiante) => Estudiante.edad > ultimaEdad)
            .map((Estudiante) => Estudiante.nombre)
            .join(", ");
    }
}
//# sourceMappingURL=Cl_mSalon.js.map