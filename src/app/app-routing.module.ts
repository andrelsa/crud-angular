import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TdFormComponent} from './td-form/td-form.component';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';

const routes: Routes = [
  {path: '', component: TdFormComponent},
  {path: 'reactiveform', component: ReactiveFormComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
