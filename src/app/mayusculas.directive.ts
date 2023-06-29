import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[mayusculas]'
})
export class MayusculasDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    const text = this.el.nativeElement.textContent.toUpperCase();
    this.renderer.setProperty(this.el.nativeElement, 'textContent', text);
  }
}

