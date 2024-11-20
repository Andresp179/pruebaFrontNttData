import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-inicio',
  imports: [FormsModule],
  standalone: true,  
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})


export class InicioComponent {
  tipoDocumento: string = '';
  numeroDocumento: string = '';

  constructor(private router: Router) {}

  formValido(): boolean {
    return (
      this.tipoDocumento !== '' &&
      this.numeroDocumento.length >= 8 &&
      this.numeroDocumento.length <= 11
    );
  }

  buscarCliente() {
    this.router.navigate(['/resumen'], {
      queryParams: {
        tipoDocumento: this.tipoDocumento,
        numeroDocumento: this.numeroDocumento,
      },
    });
  }
}
