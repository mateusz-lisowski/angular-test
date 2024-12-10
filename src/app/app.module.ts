import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BookListComponent } from './books/book-list/book-list.component';
import { BookFormComponent } from './books/book-form/book-form.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';

// import { MemberListComponent } from './members/member-list/member-list.component';
// import { MemberFormComponent } from './members/member-form/member-form.component';
// import { MemberDetailComponent } from './members/member-detail/member-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookFormComponent,
    BookDetailComponent,
    // MemberListComponent,
    // MemberFormComponent,
    // MemberDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
