import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WishItem } from '../shared/modules/wishitem';

@Injectable({
  providedIn: 'root'
})
export class WishRepoService {
  private wishesUrl = 'wishes_repo.json';

  private getStandardOptions() : any {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
  };

  constructor(private http: HttpClient) { }

  getWishes(): Observable<any> {
    // console.dir(['WishRepoService','getWishes', 'started']);
    let options = this.getStandardOptions();
    debugger;
    options.params = new HttpParams({
      fromObject: {
        format: 'json'
      }
    });
    return this.http.get<any>(this.wishesUrl, options);
  }

  private addWish(wish: WishItem) {
    let options = this.getStandardOptions();
    options.headers = options.headers.set('authorization', 'some_value');
    return this.http.post<any>(this.wishesUrl, wish, options);
  }
}
