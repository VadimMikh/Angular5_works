import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatTableModule } from '@angular/material';


import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import { Lesson1TableComponent } from './lesson1-table/lesson1-table.component';
import {MyTableComponent} from './lesson1-table/my-table.component';
import {FormsModule} from '@angular/forms';
import {AddItemComponent} from './lesson1-table/add-item.component';
import {MainService} from './lesson1-table/main.service';


@NgModule({
  declarations: [
    AppComponent,
    Lesson1TableComponent,
    AddItemComponent,
    MyTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'lesson1', component: Lesson1TableComponent },
      { path: '', redirectTo: 'lesson1', pathMatch: 'full' }
    ]),
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
