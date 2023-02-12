import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{
  username: string = '';
  password: string = '';

  constructor () {}

  ngOnInit(): void {

  }

  onSubmit(): void {
    alert('Has successfully signed in');
  }

}
