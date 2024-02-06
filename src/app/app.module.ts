import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserAlbumsComponent } from './user-albums/user-albums.component';
import { PhotosComponent } from './photos/photos.component';
import { EditPhotoComponent } from './edit-photo/edit-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PostsComponent,
    UsersComponent,
    DetailsComponent,
    UserAlbumsComponent,
    PhotosComponent,
    EditPhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
