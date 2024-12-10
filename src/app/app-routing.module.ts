import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookFormComponent } from './books/book-form/book-form.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
// import { MemberListComponent } from './members/member-list/member-list.component';
// import { MemberFormComponent } from './members/member-form/member-form.component';
// import { MemberDetailComponent } from './members/member-detail/member-detail.component';

export const routes: Routes = [
  { path: 'books', component: BookListComponent },
  { path: 'books/new', component: BookFormComponent },
  { path: 'books/edit/:id', component: BookFormComponent },
  { path: 'books/:id', component: BookDetailComponent },
  // { path: 'members', component: MemberListComponent },
  // { path: 'members/new', component: MemberFormComponent },
  // { path: 'members/edit/:id', component: MemberFormComponent },
  // { path: 'members/:id', component: MemberDetailComponent },
  { path: '', redirectTo: '/books', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
