import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  standalone: false,
  templateUrl: './book-detail.component.html'
})
export class BookDetailComponent implements OnInit {
  book: any;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('id');
    if (bookId) {
      this.apiService.getBookById(bookId).subscribe(data => this.book = data);
    }
  }

  deleteBook(id: string) {
    this.apiService.deleteBook(id).subscribe(() => this.router.navigate(['/books']));
  }
}
