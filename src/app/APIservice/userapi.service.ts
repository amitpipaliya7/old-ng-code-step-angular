import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserapiService {

  constructor(private http: HttpClient) { }

  url ="https://dummyjson.com/products/"

  usersapi(){
    // this.http.get("https://api.publicapis.org/entries")
    return this.http.get(this.url)
  }

  
}
