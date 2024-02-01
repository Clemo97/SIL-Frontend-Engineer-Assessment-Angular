import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-user-albums',
  templateUrl: './user-albums.component.html',
  styleUrls: ['./user-albums.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '200ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('100ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class UserAlbumsComponent implements OnInit {

  userAlbum$: any;

  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.userAlbum$ = params.id)
  }

  ngOnInit() {
    this.data.getUserAlbum(this.userAlbum$).subscribe(
      (data: any) => this.userAlbum$ = data
    )
  }

}
