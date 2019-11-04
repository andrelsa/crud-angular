import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './core/home/home.component';
import {ErrorComponent} from './core/error/error.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'demo', loadChildren: './demo/demo.module#DemoModule'}
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
