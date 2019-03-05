import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from "@angular/forms";
import { MatInputModule,
  MatMenuModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatExpansionModule} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { TestPageComponent } from './test-page/test-page.component';
import { ErrorComponent } from './error/error.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SamsungComponent } from './samsung/samsung.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FilterComponent } from './components/shopping-cart/filter/filter.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';

const appRoutes: Routes = [

  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'samsung',
    component: SamsungComponent
  },

  {
    path: 'contact',
    component: ContactComponent
  },

  {
    path: 'test',
    component: TestPageComponent
  },

  {
    path: '**',
    component: ErrorComponent
  },

  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestPageComponent,
    ErrorComponent,
    AboutComponent,
    ContactComponent,
    SamsungComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ShoppingCartComponent,
    FilterComponent,
    ProductListComponent,
    CartComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
