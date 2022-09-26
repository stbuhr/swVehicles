import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PageNotFoundComponent } from './page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      {
        path: 'vehicles',
        loadComponent: () =>
          import('./vehicles/vehicle-shell/vehicle-shell.component').then(
            (mod) => mod.VehicleShellComponent
          ),
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./cart/cart-shell/cart-shell.component').then(
            (mod) => mod.CartShellComponent
          ),
      },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent },
    ]),
  ],
  declarations: [AppComponent, WelcomeComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
