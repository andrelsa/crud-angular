import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './core/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
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
