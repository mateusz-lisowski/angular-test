import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'http://localhost:8010/api/v1';

  constructor(private http: HttpClient) {}

  // Books
  getBooks(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/books`);
  }

  getBookById(id: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}/books/${id}`);
  }

  createBook(book: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/books`, book);
  }

  updateBook(id: string, book: any): Observable<any> {
    return this.http.put(`${this.BASE_URL}/books/${id}`, book);
  }

  deleteBook(id: string): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/books/${id}`);
  }

  // Members
  getMembers(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/members`);
  }

  getMemberById(id: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}/members/${id}`);
  }

  createMember(member: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/members`, member);
  }

  updateMember(id: string, member: any): Observable<any> {
    return this.http.put(`${this.BASE_URL}/members/${id}`, member);
  }

  deleteMember(id: string): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/members/${id}`);
  }
}
