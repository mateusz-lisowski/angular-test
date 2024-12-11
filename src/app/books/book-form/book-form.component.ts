import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-book-form',
  imports: [
    FormsModule,
    NgIf,
    RouterLink
  ],
  templateUrl: './book-form.component.html'
})
export class BookFormComponent implements OnInit {
  book: any = { title: '', author: '' };
  bookId: string | null = null;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.bookId = this.route.snapshot.paramMap.get('id');
    if (this.bookId) {
      this.apiService.getBookById(this.bookId).subscribe(data => this.book = data);
    }
  }

  saveBook() {
    if (this.bookId) {
      this.apiService.updateBook(this.bookId, this.book).subscribe(() => this.router.navigate(['/books']));
    } else {
      this.apiService.createBook(this.book).subscribe(() => this.router.navigate(['/books']));
    }
  }
}
