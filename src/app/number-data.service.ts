import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NumberDataService {

  url = 'http://numbersapi.com/';
  constructor(private http: HttpClient) { }

  getData(num: number) {

    if (Number.isNaN(num)) {
      num = 1;
    }
    return this.http.get(this.url + num, {responseType: 'text'});
  }
}
