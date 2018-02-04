import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatTableModule } from '@angular/material';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { MyTableComponent } from './products/my-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddItemComponent } from './products/add-item.component';
import { MainService } from './main.service';
import { HomeComponent } from './home/home.component';
import { ItemInnerComponent } from './item-inner/item-inner.component';
import { AdminComponent } from './admin/admin.component';
import { CommentsService } from './comments/comments.service';
import { CommentListComponent } from './comment-list/comment-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddItemComponent,
    MyTableComponent,
    HomeComponent,
    ItemInnerComponent,
    AdminComponent,
    CommentListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductsComponent },
      // { path: 'product/:id', component: ItemInnerComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'comments', component: CommentListComponent },
      { path: 'home',
        component: HomeComponent,
        children: [
          {
            path: 'product/:id',
            component: ItemInnerComponent
          }
        ]
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]),
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [
    MainService,
    CommentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
