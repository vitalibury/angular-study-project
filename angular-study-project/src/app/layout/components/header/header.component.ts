import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userName$ = this.auth.authenticatedHow$;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  toLoginPage() {
    this.router.navigate(['/auth', 'login']);
  }

  logout() {
    this.auth.logout();
  }

}
