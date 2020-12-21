// eslint-disable-next-line simple-import-sort/imports
import firebase from "firebase/app"

import "firebase/analytics"
import "firebase/auth"
import "firebase/firestore"

const config = {
    apiKey: "AIzaSyDqASgAOYI1jAmtcC2A7MDWKUj1lsmNJok",
    authDomain: "next-todo-3a49a.firebaseapp.com",
    projectId: "next-todo-3a49a",
    storageBucket: "next-todo-3a49a.appspot.com",
    messagingSenderId: "244074428432",
    appId: "1:244074428432:web:5a8c977d3283edd6a3b295",
    measurementId: "G-8R1ZRGFXCG",
}

if (!firebase.apps.length) {
    firebase.initializeApp(config)
    firebase.auth()
    firebase.firestore()

    if (typeof window !== "undefined") {
        firebase.analytics()
    }
}

export default firebase
