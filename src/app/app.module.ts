import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlumnosComplementoComponent } from './mi-componente/mi-componente.component';
import { CambioColorAlumnoDirective } from './cambio-color.directive';
import { MayusculasDirective } from './mayusculas.directive';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComplementoComponent,
    CambioColorAlumnoDirective,
    MayusculasDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
