import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {Router, RouterLink} from '@angular/router';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-book-list',
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './book-list.component.html'
})
export class BookListComponent implements OnInit {
  books: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    this.apiService.getBooks().subscribe(data => this.books = data);
  }

  deleteBook(id: string) {
    this.apiService.deleteBook(id).subscribe(() => this.loadBooks());
  }
}
