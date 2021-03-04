import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import { passwordVerify } from '../auxilary/Hash';

const firebaseConfig = {
    apiKey: 'AIzaSyB1JOo-1nY2-_UmUufQaD40r_g4AVp884M',
    authDomain: 'postie-60558.firebaseapp.com',
    databaseURL:
        'https://postie-60558-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'postie-60558',
    storageBucket: 'postie-60558.appspot.com',
    messagingSenderId: '946951264876',
    appId: '1:946951264876:web:1d149570c9f82ada6b1649',
};

firebase.initializeApp(firebaseConfig);
const authenticate = firebase.auth;
const actionCodeSettings = {
    url: 'https://postie-60558.web.app/sign-up',
    handleCodeInApp: true,
};

authenticate().onAuthStateChanged((firebaseUser) => {
    if (firebaseUser) {
        console.log(firebaseUser);
    } else {
        console.log('not logged in !');
    }
});

export const sendSignInLinkToEmail = (email) =>
    authenticate().sendSignInLinkToEmail(email, actionCodeSettings);

const signInWithEmailLink = (email, href) =>
    new Promise((resolve, reject) => {
        authenticate()
            .signInWithEmailLink(email, href)
            .then((result) => {
                window.localStorage.removeItem('email');
                resolve(result.user);
            })
            .catch((error) => reject(error));
    });

export const isSignInWithEmailLink = () =>
    new Promise((resolve, reject) => {
        let email = window.localStorage.getItem('email');
        if (!email) {
            email = window.prompt('Provide the email for your confirmation.');
        }
        signInWithEmailLink(email, window.location.href)
            .then((result) => resolve(result))
            .catch((error) => reject(error));
    });

export const setUserData = ({ gender, userType, userName }) =>
    new Promise((resolve, reject) => {
        firebase
            .database()
            .ref(`users/${userName}`)
            .set({ gender, userType }, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(true);
                }
            });
    });

export const setPasswordList = (userName, password, salt) =>
    new Promise((resolve, reject) => {
        firebase
            .database()
            .ref(`passwords/${userName}`)
            .set({ password, salt }, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(true);
                }
            });
    });

export const setPost = ({ description, title, userName, imageName }) =>
    new Promise((resolve, reject) => {
        const key = firebase.database().ref().child('posts').push().key;
        const updates = {};
        const post = {
            title: title,
            imageName: imageName,
            description: description,
        };
        updates[`/posts/${key}`] = { ...post, userName: userName };
        updates[`/users/${userName}/posts/${key}`] = post;
        firebase
            .database()
            .ref()
            .update(updates, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(true);
                }
            });
    });

export const setUser = ({ userName }) =>
    new Promise((resolve, reject) => {
        firebase
            .database()
            .ref(`userNames/${userName}`)
            .set({}, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(true);
                }
            });
    });

export const setStorage = (image) =>
    new Promise((resolve, reject) => {
        firebase
            .storage()
            .ref()
            .child(image.name)
            .put(image)
            .then((response) => {
                if (response.ref !== null) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            })
            .catch((error) => reject(error));
    });

export const getUsername = (userName) =>
    new Promise((resolve, reject) => {
        firebase
            .database()
            .ref(`userNames/${userName}`)
            .once('value')
            .then((response) => {
                if (response.val() !== null) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            })
            .catch((error) => reject(error));
    });

export const getUserCredentials = (userName, passwordToCheck) =>
    new Promise((resolve, reject) => {
        firebase
            .database()
            .ref(`passwords/${userName}`)
            .once('value')
            .then((response) => {
                if (response.val() === null) {
                    resolve(false);
                }

                const { password, salt } = response.val();
                resolve(password === passwordVerify(passwordToCheck, salt));
            })
            .catch((error) => reject(error));
    });

export const getUserData = (userName) =>
    new Promise((resolve, reject) => {
        firebase.database
            .ref(`users/${userName}}`)
            .once('value')
            .then((response) => {
                if (response.val() === null) {
                    resolve(false);
                }

                resolve(response.val());
            })
            .catch((error) => reject(error));
    });

export const getStorage = (imageName) =>
    new Promise((resolve, reject) => {
        firebase
            .storage()
            .ref()
            .child(imageName)
            .getDownloadURL()
            .then((response) => resolve(response))
            .catch((error) => reject(error));
    });

export const getAllPosts = () =>
    new Promise((resolve, reject) => {
        firebase
            .database()
            .ref('posts/')
            .once('value')
            .then((response) => resolve(Object.values(response.val())))
            .catch((error) => reject(error));
    });
