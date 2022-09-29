import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const headers = new HttpHeaders({Authorization:'Bearer 2599a7af1b856b619729fde0eaf394494d5ee82ff4acea929e2231fc1cd42461'})

export interface User {
  id: number
  name: string
  email: string
  gender: 'male' | 'female'
  status: 'active' | 'inactive'
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUsers$(): Observable<User[]> {
    return this.httpClient.get<User[]>('https://gorest.co.in/public/v2/users', { headers })
  }

  saveNewUser$(newUser: Partial<User>) {
    console.log('saveNewUser', newUser)
  }
}
