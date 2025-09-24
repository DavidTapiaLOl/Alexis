import { CommonModule } from '@angular/common';
import { Component,computed,signal,Signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  imports: [FormsModule, CommonModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
/*   nombre: string = 'Juan';
  edad: number = 25;
  nombreCapitalizado: string = this.nombre; */

  nombreSignal = signal('Juan');
  edadSignal = signal(25);
  nombreCapitalizadoSignal = computed(() => this.nombreSignal().toUpperCase());

  mostrarModal: boolean = false;
  tipoModal: 'nombre' | 'edad' | 'reset' | '' = '';

  nuevoNombre: string = '';
  nuevaEdad: number | null = null;
  nuevoNombreCapitalizado: string = '';



  abrirModal(tipo: 'nombre' | 'edad' | 'reset') {
    this.tipoModal = tipo;
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
    this.tipoModal = '';
    this.nuevoNombre = '';
    this.nuevaEdad = null;
    this.nuevoNombreCapitalizado = '';
  }

  guardar() {
    /* if (this.tipoModal === 'nombre' && this.nuevoNombre.trim() !== '') {
      this.nombreSignal = this.nuevoNombre;
      this.nombreCapitalizado = this.nuevoNombre.toUpperCase();
    }

    if (this.tipoModal === 'edad' && this.nuevaEdad !== null) {
      this.edadSignal = this.nuevaEdad;
    }

    if (this.tipoModal === 'reset' && this.nuevoNombreCapitalizado.trim() !== '') {
      this.nombreCapitalizadoSignal = this.nuevoNombreCapitalizado;
    } */


       if (this.tipoModal === 'nombre' && this.nuevoNombre.trim() !== '') {
      this.nombreSignal.set(this.nuevoNombre); // ✅ usar set()
    }

    if (this.tipoModal === 'edad' && this.nuevaEdad !== null) {
      this.edadSignal.set(this.nuevaEdad); // ✅ usar set()
    }

    if (this.tipoModal === 'reset' && this.nuevoNombreCapitalizado.trim() !== '') {
      // si quieres sobreescribir el capitalizado manualmente:
      this.nombreSignal.set(this.nuevoNombreCapitalizado.toLowerCase());
    }


    this.cerrarModal();
  }

}
