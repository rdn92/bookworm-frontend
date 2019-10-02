import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../services/author.service';
import { Author } from './author';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

  authors: Author[];

  constructor(
    private authorService: AuthorService
  ) { }

  ngOnInit() {
    this.getData();
  }

  private getData() {
    this.authorService.getAll().subscribe(
      data => this.authors = data
    );
  }

}
