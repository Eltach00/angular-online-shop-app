import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  login(user: Object): Observable<Object> {
    return this.http.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${env.API_KEY}`,
      user
    );
  }
}

/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3alSKzL6U-pBJRW136H8oFZR3aFKlcQE",
  authDomain: "online-shop-8e18a.firebaseapp.com",
  projectId: "online-shop-8e18a",
  storageBucket: "online-shop-8e18a.appspot.com",
  messagingSenderId: "286762524183",
  appId: "1:286762524183:web:2a4b6423ad4d7493ffc652"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 */
