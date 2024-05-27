import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { SucessoCadastroComponent } from './sucesso-cadastro/sucesso-cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaiorIdadeDirective } from './directives/maior-idade.directive';
import { ValidadorCepDirective } from './directives/validador-cep.directive';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, CadastroComponent, SucessoCadastroComponent, MaiorIdadeDirective, ValidadorCepDirective],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
