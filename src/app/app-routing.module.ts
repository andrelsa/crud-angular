import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './core/home/home.component';
import {ErrorComponent} from './core/error/error.component';
import {NotFoundComponent} from './core/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'demo', loadChildren: './demo/demo.module#DemoModule'},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'}),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
