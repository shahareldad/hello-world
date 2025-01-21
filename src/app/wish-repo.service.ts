import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { WishItem } from '../shared/modules/wishitem';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WishRepoService {
  private wishesUrl = 'wishes_repo1.json';

  private getStandardOptions() : any {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
  };

  constructor(private http: HttpClient) { }

  getWishes(): Observable<any> {
    // console.dir(['WishRepoService','getWishes', 'started']);
    let options = this.getStandardOptions();
    options.params = new HttpParams({
      fromObject: {
        format: 'json'
      }
    });
    return this.http.get<any>(this.wishesUrl, options).pipe(catchError(this.handleError));
  }
  
  private handleError(error: HttpErrorResponse) {
    if (error.status == 0) {
      console.error(`There is an issue with the client or network connection: `, error.error);
    } else {
      console.error(`Server-side error`, error.error);
    }
    return throwError(() => new Error('כשלון ביבוא נתונים לתצוגה'));
  }

  private addWish(wish: WishItem) {
    let options = this.getStandardOptions();
    options.headers = options.headers.set('authorization', 'some_value');
    return this.http.post<any>(this.wishesUrl, wish, options);
  }
}
