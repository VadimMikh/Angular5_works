import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Comment } from './comment';

import { map } from 'rxjs/operators';

@Injectable()
export class CommentsService {

  private url = 'http://localhost:2403/comments';

  constructor(private http: Http) { }

  public getComments(): Observable<Comment[]> {
    const comment = this.http.get(this.url).pipe(
        map(this.sortByDate)
    );
    return comment;
  }

  public addComment(item): Observable<Response>  {
    item.date = new Date();
    return this.http.post(this.url, item);
  }

  public deleteComment(id): Observable<Response>  {
    return this.http.delete(this.url + '/' + id);
  }

  private sortByDate(response: Response) {
    const res = response.json();
    function sortItems(a, b) {
      return new Date(a.date).getTime() + new Date(b.date).getTime();
    }
    res.sort(sortItems);
    res.map(function (item) {
      const d = new Date(item.date);
      item.date = d.toLocaleDateString() + ' - ' + d.toLocaleTimeString();
    });
    return res;
  }

}
