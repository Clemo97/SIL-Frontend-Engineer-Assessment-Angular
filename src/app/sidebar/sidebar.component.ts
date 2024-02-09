import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { AuthService } from '../shared/services/auth.service';


@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  currentUrl: string;

  constructor(private router: Router, public authService: AuthService) {
    // router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url)
    router.events.subscribe(
      (_: NavigationEnd) => (this.currentUrl = this.router.url)
    );
  }

  ngOnInit() {}
}
