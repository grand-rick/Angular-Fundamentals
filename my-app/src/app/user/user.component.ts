import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { User } from '../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getUsers().subscribe(res => {
      this.users = res;
    })
  }
}
