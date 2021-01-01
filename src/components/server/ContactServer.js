import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
import { passwordVerify } from "../auxilary/Hash";

const firebaseConfig = {
    apiKey: "AIzaSyBdpf_wxtSI1tFtQCNNST1q-OXlfF6K0kU",
    authDomain: "create-react-investment.firebaseapp.com",
    databaseURL: "https://create-react-investment.firebaseio.com",
    projectId: "create-react-investment",
    storageBucket: "create-react-investment.appspot.com",
    messagingSenderId: "779045166015",
    appId: "1:779045166015:web:9c9e3ab9c07b9f414f1f0a",
};

firebase.initializeApp(firebaseConfig);

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

export const setPasswordList = ({ userName, password, salt }) =>
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
        const key = firebase.database().ref().child("posts").push().key;
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
                    reject(false);
                }
            })
            .catch((error) => reject(error));
    });

export const getUsername = (userName) =>
    new Promise((resolve, reject) => {
        firebase
            .database()
            .ref(`userNames/${userName}`)
            .once("value")
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
            .once("value")
            .then((response) => {
                if (response.val() === null) {
                    reject(false);
                }

                const { password, salt } = response.val();
                resolve(password === passwordVerify(passwordToCheck, salt));
            })
            .catch((error) => reject(error));
    });

export const getUser = (userName) =>
    new Promise((resolve, reject) => {
        firebase
            .database()
            .ref(`users/${userName}`)
            .once("value")
            .then((response) => {
                if (response.val() === null) {
                    reject(false);
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
            .ref("posts/")
            .once("value")
            .then((response) => {
                if (response.val() === null) {
                    reject("No posts");
                }
                resolve(Object.values(response.val()));
            })
            .catch((error) => reject(error));
    });
