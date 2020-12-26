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

export const setUserData = ({
    salt,
    email,
    gender,
    password,
    userType,
    userName,
}) =>
    new Promise((resolve, reject) => {
        firebase
            .database()
            .ref(`users/${userName}`)
            .set({ userType, password, gender, email, salt }, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(true);
                }
            });
    });

export const setEmailList = (userName, email) =>
    new Promise((resolve, reject) => {
        firebase
            .database()
            .ref(`emails/${userName}`)
            .set(email, (error) => {
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
        const keyPost = firebase.database().ref().child("posts").push().key;
        firebase
            .database()
            .ref(`posts/${keyPost}`)
            .set({ description, title, userName, imageName }, (error) => {
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
            .ref(`emails/${userName}`)
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

export const getUserEmail = (emailToCheck) =>
    new Promise((resolve, reject) => {
        firebase
            .database()
            .ref(`emails/`)
            .once("value")
            .then((response) => {
                const users = Object.values(response.val());
                for (const email of users) {
                    if (email === emailToCheck) {
                        resolve(true);
                    }
                }
                resolve(false);
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
            .once("value")
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
            .ref("posts/")
            .once("value")
            .then((response) => resolve(Object.values(response.val())))
            .catch((error) => reject(error));
    });
