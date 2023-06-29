import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCambioColorAlumno]'
})
export class CambioColorAlumnoDirective {
  constructor(private el: ElementRef) {}

  @HostListener('click')
  onClick() {
    this.el.nativeElement.style.backgroundColor = this.getRandomColor();
  }

  private getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}