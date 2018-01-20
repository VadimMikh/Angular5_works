import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatTableModule } from '@angular/material';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Lesson1TableComponent } from './lesson1-table/lesson1-table.component';
import { MyTableComponent } from './lesson1-table/my-table.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddItemComponent } from './lesson1-table/add-item.component';
import { MainService } from './main.service';
import { HomeComponent } from './home/home.component';
import { ItemInnerComponent } from './item-inner/item-inner.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    Lesson1TableComponent,
    AddItemComponent,
    MyTableComponent,
    HomeComponent,
    ItemInnerComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'products', component: Lesson1TableComponent },
      // { path: 'product/:id', component: ItemInnerComponent },
      { path: 'admin', component: AdminComponent },
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
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
