import { Injectable } from '@angular/core';

//Not needed for now
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

//Firebase
import firebase from 'firebase';


//Not needed for now
//import { Observable } from 'rxjs/Observable';

/*
*Class for firebase usage
*At the moment only for authentication
*/


@Injectable()
export class FirebaseProvider {

  constructor() { }

  //login function
  loginUser(email: string, password: string): Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  //sign up with email and password
  signupUser(email: string, password: string): Promise<any> {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(newUser => {
        firebase
          .database()
          .ref(`/userProfile/${newUser.uid}/email`)
          .set(email);
      })
      .catch(error => {
        console.error(error);
        throw new Error(error);
      });
  }


  //signin with google
  googleLogin() {

    var provider = new firebase.auth.GoogleAuthProvider();
    
    //force account selection
    provider.setCustomParameters({
      'prompt' : 'select_account'
    });
    return firebase
    .auth()
    .signInWithPopup(provider)
    .catch(error => {
      console.error(error);
      throw new Error(error);
    }); 

    //could not get google sign in with redirect to work 
    /*
    firebase.auth().signInWithRedirect(provider).then( () => {
      firebase.auth().getRedirectResult().then( result => {
        // This gives you a Google Access Token.
        // You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(token, user);
      }).catch(function(error) {
        // Handle Errors here.
        console.log(error.message);
      });
    });
    */

  }


  //Signout 
  logoutUser(): Promise<void> {
    const userId: string = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref(`/userProfile/${userId}`)
      .off();
    return firebase.auth().signOut();
  }

}
