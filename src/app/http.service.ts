import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseurl = environment.baseurl;
  constructor(private http: HttpClient) { }

  postData(data: any, url ?: string) {
   return this.http.post(this.baseurl+url, data);
  }
}
