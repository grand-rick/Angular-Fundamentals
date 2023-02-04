import { Component, OnInit } from '@angular/core';
import { BookmarkService } from '../services/bookmark.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
  bookmarkList: object[] = [];

  // Inject the Bookmark service into the constructor below
  constructor(private bookmarkService: BookmarkService) { }

  ngOnInit(): void {
    // Invoke getBookmarks() from the Bookmark service, and set its return value to bookmarkList
    this.bookmarkList = this.bookmarkService.getBookmarks();
  }

  clearBookmarks(): void {
    // Invoke clearBookmarks() from the Bookmark service below
    this.bookmarkService.clearBookmarks();
    // Then, clear the local bookmarkList array
    this.bookmarkList = [];
    alert("Cleared!");
  }

}
