import { Component, OnInit } from '@angular/core';
import { LinkService } from '../services/link.service'
// Import your Bookmark service here

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  linkList: object[] = [];

  // Inject your Bookmark service into the constructor below
  constructor(private linkService: LinkService) { }

  ngOnInit(): void {
    this.linkList = this.linkService.getLinks();
  }

  addToBookmarks(bookmark): void {
    // Invoke addToBookmarks() from the Bookmark service below

    alert("Added!");
  }

}