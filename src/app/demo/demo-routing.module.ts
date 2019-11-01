import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TdFormComponent} from './td-form/td-form.component';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';
import {DemoComponent} from './demo.component';

const routes: Routes = [
  {
    path: 'demo', component: DemoComponent, children: [
      {path: '', component: TdFormComponent},
      {path: 'reactiveform', component: ReactiveFormComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule {
}
