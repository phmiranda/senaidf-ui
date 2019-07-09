import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* comentário */
import { AppRoutingModule } from './app-routing.module';

/* comentário */
import { LoginComponent } from './auth/login/login.component';

/* comentário */
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PrincipalComponent } from './componentes/principal/principal.component';

/* comentário */
import { UsuariosComponent } from './dashboard/seguranca/usuarios/usuarios.component';
import { CategoriasComponent } from './dashboard/configuracao/categorias/categorias.component';
import { ProdutosComponent } from './dashboard/administrativo/produtos/produtos.component';

@NgModule({
  declarations: [
      LoginComponent,
      NavbarComponent,
      SidebarComponent,
      FooterComponent,
      PrincipalComponent,
      UsuariosComponent,
      CategoriasComponent,
      ProdutosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AppModule { }
