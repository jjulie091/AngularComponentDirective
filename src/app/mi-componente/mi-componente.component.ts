
import { Component } from '@angular/core';
import { Alumno } from '../Model/alumno.interface';

@Component({
  selector: 'app-alumnos-complemento',
  template: `
  <h2 mayusculas>Lista de Alumnos</h2>
    <ul>
      <li *ngFor="let alumno of alumnos" appCambioColorAlumno>
          {{ alumno.nombre }} ({{ alumno.matricula }})
      </li>
    </ul>
    
  `
})

export class AlumnosComplementoComponent {
  alumnos: Alumno[] = [
    { nombre: 'Juan', matricula: 'A001' },
    { nombre: 'María', matricula: 'A002' },
    { nombre: 'Carlos', matricula: 'A003' },
    { nombre: 'Laura', matricula: 'A004' }
  ];
}
