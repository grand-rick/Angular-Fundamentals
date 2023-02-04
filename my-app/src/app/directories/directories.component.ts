import { Component, OnInit } from '@angular/core';
import { LinkService } from '../services/link.service'
import { BookmarkService } from '../services/bookmark.service'

@Component({
  selector: 'app-directories',
  templateUrl: './directories.component.html',
  styleUrls: ['./directories.component.css']
})
export class DirectoryComponent implements OnInit {
  linkList: object[] = [];

  // Inject your Bookmark service into the constructor below
  constructor(private linkService: LinkService) { }

  ngOnInit(): void {
    this.linkList = this.linkService.getLinks();
  }

  addToBookmarks(bookmark: BookmarkService): void {
    // Invoke addToBookmarks() from the Bookmark service below
    bookmark.addToBookmarks();
    alert("Added!");
  }

}