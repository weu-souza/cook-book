import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AlertModule} from "../shared/componentes/alerta/alert.module";
import {HttpClientModule} from "@angular/common/http";
import {LoginModule} from "../pages/login/login.module";
import {RegisterModule} from "../pages/register/register.module";
import {AlterarSenhaModule} from "../feature/alterar-senha/module/alterar-senha.module";
import {AdicionarProdutoModule} from "../feature/adicionar-produto/module/adicionar-produto.module";
import {HeaderComponent} from "../core/header/header.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ReceitaModule} from "../feature/receita/module/receita.module";

export const IMPORTS: any[] = [
  BrowserModule,
  AppRoutingModule,
  ReactiveFormsModule,
  BrowserAnimationsModule,
  AlertModule,
  HttpClientModule,
  LoginModule,
  RegisterModule,
  AlterarSenhaModule,
  AdicionarProdutoModule,
  HeaderComponent,
  ReceitaModule
]
