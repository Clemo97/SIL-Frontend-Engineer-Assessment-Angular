import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


import { DataService } from '../data.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$: Object;

  constructor(private data: DataService, public authService: AuthService) { }

  ngOnInit() {

    this.data.getAlbums().subscribe(
      (data: any) => this.posts$ = data
    )
  }
}
