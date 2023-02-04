import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor() { }

  getLinks(): object[] {
    return [
      {
        id: 1,
        name: 'Angular Blog',
        url: "https://blog.angular.io/"
      },
      {
        id: 2,
        name: 'Angular Documentation',
        url: "https://angular.io/docs"
      },
      {
        id: 3,
        name: 'Angular API List',
        url: "https://angular.io/api"
      },
      {
        id: 4,
        name: 'Angular GitHub organization',
        url: "https://github.com/angular/angular"
      },
      {
        id: 5,
        name: 'Angular Twitter',
        url: "https://twitter.com/angular"
      }
    ];
  }
}
