import {NgModule} from "@angular/core";
import {PerfilComponent} from "../page/perfil.component";
import { PerfilRoutingModule } from './perfil-routing.module';
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";

@NgModule({
  declarations: [PerfilComponent],
    imports: [
        PerfilRoutingModule,
        ButtonModule,
        CardModule,
        CommonModule,
        FormsModule,
        InputTextModule,
        ReactiveFormsModule,
        RippleModule,
    ],
  exports: [PerfilComponent]
})
export class PerfilModule {
}
