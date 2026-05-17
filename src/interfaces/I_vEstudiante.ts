export interface I_vEstudiante {
  get nombre(): string;
  get edad(): number;
  mostrar(): void;
  ocultar(): void;
  onAceptar(callback: () => void): void;
  onCancelar(callback: () => void): void;
}
