import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "./users/users.component";
import { DetailsComponent } from "./details/details.component";
import { PostsComponent } from "./posts/posts.component";
import { UserAlbumsComponent } from "./user-albums/user-albums.component";
import { PhotosComponent } from "./photos/photos.component";
import { EditPhotoComponent } from "./edit-photo/edit-photo.component";
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';

import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/sign-in',
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  { path: 'register-user', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  {
    path: "home",
    component: UsersComponent,
    canActivate: [AuthGuard]
  },
  // {
  //   path: "details/:id",
  //   component: DetailsComponent,
  // },
  {
    path: "albums",
    component: PostsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "albums/:id",
    component: UserAlbumsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "photos/:id",
    component: PhotosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "edit-photo/:id",
    component: EditPhotoComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
