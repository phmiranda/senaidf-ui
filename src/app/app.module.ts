import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* comentário */
import { AppRoutingModule } from './app-routing.module';

/* comentário */
import { LoginComponent } from './auth/login/login.component';

/* comentário */
import { NavbarComponent } from './componentes/navbar/navbar.component';

/* comentário */
import { UsuariosComponent } from './dashboard/seguranca/usuarios/usuarios.component';
import { CategoriasComponent } from './dashboard/configuracao/categorias/categorias.component';

@NgModule({
  declarations: [
      LoginComponent,
      NavbarComponent,
      UsuariosComponent,
      CategoriasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AppModule { }
