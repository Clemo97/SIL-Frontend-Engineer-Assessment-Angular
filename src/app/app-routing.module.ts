import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "./users/users.component";
import { DetailsComponent } from "./details/details.component";
import { PostsComponent } from "./posts/posts.component";
import { UserAlbumsComponent } from "./user-albums/user-albums.component";

const routes: Routes = [
  {
    path: "",
    component: UsersComponent,
  },
  // {
  //   path: "details/:id",
  //   component: DetailsComponent,
  // },
  {
    path: "albums",
    component: PostsComponent,
  },
  {
    path: "albums/:id",
    component: UserAlbumsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
