import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

const headers = new HttpHeaders({Authorization:'Bearer 2599a7af1b856b619729fde0eaf394494d5ee82ff4acea929e2231fc1cd42461'})

export interface User {
  id: number
  name: string
  email: string
  gender: 'male' | 'female'
  status: 'active' | 'inactive'
}

const serviceUrl = 'https://gorest.co.in/public/v2/users'
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUsers$(): Observable<User[]> {
    return this.httpClient.get<User[]>(serviceUrl, { headers })
  }

  saveNewUser$(newUser: Partial<User>) {
    console.log('saveNewUser', newUser)
    return this.httpClient.post(serviceUrl, newUser, { headers }).pipe(map(data => {
      console.log('posted new user', data)
      return data
    }))
  }
}
