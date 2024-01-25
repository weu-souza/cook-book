import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PerfilComponent} from "../page/perfil.component";


const routes: Routes = [
  {
    path: '', children: [
      {path: '', component: PerfilComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule {
}
