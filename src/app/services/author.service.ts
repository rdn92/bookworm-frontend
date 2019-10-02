import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from '../authors/author';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private readonly url = "http://localhost:8000/api/authors";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Author[]> {
    return this.http.get<Author[]>(this.url + "?format=json");
  }

}
