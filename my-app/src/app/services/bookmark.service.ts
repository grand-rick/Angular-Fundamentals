import { Injectable } from '@angular/core';
import { Link } from '../models/Link';

@Injectable({
  providedIn: 'root'
})

export class BookmarkService {
  bookMarks: Link[] = [];

  constructor() { }

  getBookmarks() {
    return this.bookMarks;
  }
  addToBookmarks(link: Link): void {
    this.bookMarks.push(link);
  }
  clearBookmarks() {
    this.bookMarks = [];
  }
}
