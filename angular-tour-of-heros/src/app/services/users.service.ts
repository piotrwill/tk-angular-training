import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of, switchMap } from 'rxjs';

const headers = new HttpHeaders({Authorization:'Bearer 2599a7af1b856b619729fde0eaf394494d5ee82ff4acea929e2231fc1cd42461'})

export interface User {
  id: number
  name: string
  first_name: string
  last_name: string
  email: string
  gender: 'male' | 'female'
  status: 'active' | 'inactive'
}

//const serviceUrl = 'https://gorest.co.in/public/v2/users'
const serviceUrl = 'https://reqres.in/api/users'
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users$ = new BehaviorSubject<User[]>([])

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<{ data: User[]}>(serviceUrl, { headers })
      .pipe(map(response => response.data.map(user => (
        { ...user, name: !user.name ? `${user.first_name} ${user.last_name}` : user.name}
      ))))
   }

   getUsers$(): Observable<User[]> {
      return this.httpClient.get<{ data: User[]}>(serviceUrl, { headers })
        .pipe(switchMap(response => {
          const userList = response.data.map(user => ({ ...user, name: !user.name ? `${user.first_name} ${user.last_name}` : user.name}))
          this.users$.next(userList)
          return this.users$
        }))
   }

  saveNewUser$(newUser: Partial<User>) {
    console.log('saveNewUser', newUser)
    return this.httpClient.post(serviceUrl, newUser, { headers }).pipe(map(data => {
      console.log('posted new user', data)
      return data
    }))
  }

  // todo: user delete should trigger new user list for other subscriptions like getUsers
  deleteUser$(user: User) {
    return this.httpClient.delete(`${serviceUrl}/${user.id}`).pipe(switchMap(() => {
      return this.getUsers$()
    }))
  }
}
