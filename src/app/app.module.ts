import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
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
import { CartComponent } from './components/shopping-cart/cart/cart.component'
import { PostService } from './services/post.service';
<<<<<<< HEAD
import { ShopComponent } from './shop/shop.component';
=======
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { PhonesComponent } from './phones/phones.component';
import { AccessoryComponent } from './accessory/accessory.component';
>>>>>>> 8b2f390726446bee7d886ea1b8b2394dd6b61a04

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
    path: 'phone',
    component: PhonesComponent
  },
  {
    path: 'accessory',
    component: AccessoryComponent
  }
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
    CartComponent,
<<<<<<< HEAD
    ProductItemComponent,
    ShopComponent
=======
    WelcomePageComponent,
    PhonesComponent,
    AccessoryComponent
>>>>>>> 8b2f390726446bee7d886ea1b8b2394dd6b61a04
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
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
