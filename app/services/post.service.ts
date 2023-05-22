import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiURL: string;

  constructor(private http: HttpClient) { 
    this.apiURL == 'http://localhost:3030';
  }
  obterHamburguers(){
    return this.http.get(`${environment.apiURL}/hamburguers`);

}
}
