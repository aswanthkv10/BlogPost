import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Service {

  apiUrl = 'http://localhost:3000/api/posts';

  constructor(private http: HttpClient) {}

  getPosts(search = '') {
  return this.http.get(
    `${this.apiUrl}?search=${search}`
  );
}

  getPost(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createPost(data: any) {
    return this.http.post(this.apiUrl, data);
  }

  updatePost(id: number, data: any) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  deletePost(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}