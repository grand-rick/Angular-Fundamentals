import { Component, OnInit } from '@angular/core';
// Import the bookmark service here

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
  bookmarkList: object[] = [];

  // Inject the Bookmark service into the constructor below
  constructor() { }

  ngOnInit(): void {
    // Invoke getBookmarks() from the Bookmark service, and set its return value to bookmarkList
  }

  clearBookmarks(): void {
    // Invoke clearBookmarks() from the Bookmark service below

    // Then, clear the local bookmarkList array

    alert("Cleared!");
  }

}
