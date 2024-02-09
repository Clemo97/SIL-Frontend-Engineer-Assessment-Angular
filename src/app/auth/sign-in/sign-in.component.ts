import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

import { MaterialModule } from '../../material.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})

export class SignInComponent implements OnInit {

  userEmailValue: string = ''; // Initialize with an empty string
  userPasswordValue: string = '';
  constructor(public authService: AuthService) { }

  ngOnInit() { }



}
