import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private isLoggedInSubject = new BehaviorSubject<boolean>(false);
    isLoggedIn$ = this.isLoggedInSubject.asObservable();

    constructor(private afAuth: AngularFireAuth, private router: Router) {
        this.afAuth.authState.subscribe(user => {
            this.isLoggedInSubject.next(!!user);
        });
    }

    // Sign up with email/password
    signup(email: string, password: string): Promise<any> {
        return this.afAuth.createUserWithEmailAndPassword(email, password)
            .then((result) => {
                this.router.navigate(['/recommendations']);
            })
            .catch((error) => {
                window.alert(error.message);
            });
    }

    // Log in with email/password
    login(email: string, password: string): Promise<any> {
        return this.afAuth.signInWithEmailAndPassword(email, password)
            .then((result) => {
                this.router.navigate(['/recommendations']);
            })
            .catch((error) => {
                window.alert(error.message);
            });
    }

    logout() {
        this.afAuth.signOut().then(() => {
            this.router.navigate(['/']);
        });
    }

    isAuthenticated(): boolean {
        return this.isLoggedInSubject.value; // Simple check for Guard
    }
}
