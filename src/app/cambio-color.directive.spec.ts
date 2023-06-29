import { ElementRef } from '@angular/core';
import { CambioColorAlumnoDirective } from './cambio-color.directive';

describe('CambioColorAlumnoDirective', () => {
  it('should create an instance', () => {
    const directive = new CambioColorAlumnoDirective(new ElementRef(null));
    expect(directive).toBeTruthy();
  });
});







