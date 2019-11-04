import {ErrorHandler, Injectable, NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {NavMenuComponent} from './nav-menu/nav-menu.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ErrorComponent} from './error/error.component';
import {GlobalErrorHandler} from './global-error-handler.service';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavMenuComponent,
    FooterComponent,
    ErrorComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    NavMenuComponent,
    FooterComponent
  ],
  providers: [
    {provide: ErrorHandler, useClass: GlobalErrorHandler}
  ]
})

@Injectable({
  providedIn: 'root'
})
export class CoreModule {
}
