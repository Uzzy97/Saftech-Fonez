import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
//import { PostDetailsComponent } from './post-details/post-details.component';
//import {PostService} from './services/post.services';
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
//import { PostCreateComponent } from './post-create/post-create.component';
import { HomeComponent } from './home/home.component';
//import { ContactComponent } from './contact/contact.component';
//import { CarsComponent } from './cars/cars.component';
//import { SubmitComponent } from './submit/submit.component';
//import { Error404Component } from './error404/error404.component';
//import { EditFeedbackComponent } from './edit-feedback/edit-feedback.component';
//import { ViewFeedbackComponent } from './view-feedback/view-feedback.component';

const appRoutes: Routes = [

  {
    path: 'home',
    component: HomeComponent
  },

  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
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
