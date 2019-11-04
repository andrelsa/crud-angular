import {Injectable, NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {NavMenuComponent} from './nav-menu/nav-menu.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    HomeComponent,
    NavMenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    NavMenuComponent,
    FooterComponent
  ]
})

@Injectable({
  providedIn: 'root'
})
export class CoreModule {
}
