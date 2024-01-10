import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserpostapiService {


  constructor(private http: HttpClient) { }

  url="http://localhost:3000/userdata";

  userpostapi(){
    return this.http.get(this.url)
  }

  savepostapi(userData:any){
    return this.http.post(this.url,userData)
  }

}





