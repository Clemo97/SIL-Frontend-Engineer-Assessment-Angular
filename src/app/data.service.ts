import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

  getUser(userId: string) {
    return this.http.get(
      "https://jsonplaceholder.typicode.com/users/" + userId
    );
  }

  getAlbums() {
    return this.http.get("https://jsonplaceholder.typicode.com/albums");
  }

  getUserAlbum(userId: string) {
    return this.http.get("https://jsonplaceholder.typicode.com/albums?userId=" + userId
    );
  }

  getPhotos(albumId: string) {
    return this.http.get("https://jsonplaceholder.typicode.com/photos?albumId=" + albumId
    );
  }

  getIndividualPhoto(id: string) {
    return this.http.get("https://jsonplaceholder.typicode.com/photos/" + id
    );
  }
}
