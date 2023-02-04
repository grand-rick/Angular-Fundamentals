import { Component, OnInit } from '@angular/core';
import { LinkService } from '../services/link.service';
import { BookmarkService } from '../services/bookmark.service';
import { Link } from '../models/Link';

@Component({
  selector: 'app-directories',
  templateUrl: './directories.component.html',
  styleUrls: ['./directories.component.css']
})
export class DirectoriesComponent implements OnInit {
  linkList: Link[] = [];

  // Inject your Bookmark service into the constructor below
  constructor(private linkService: LinkService, private bookmark: BookmarkService) { }

  ngOnInit(): void {
    this.linkList = this.linkService.getLinks();
  }

  addToBookmarks(link: Link): void {
    // Invoke addToBookmarks() from the Bookmark service below
    this.bookmark.addToBookmarks(link);
    alert("Added!");
  }

}