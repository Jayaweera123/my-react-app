import 'firebase/app'
import {initializeApp} from 'firebase/app'

import 'firebase/storage'
import {getStorage} from 'firebase/storage'

const firebaseConfig = initializeApp({
    apiKey: "AIzaSyDu7LIH52pKs4thy9rtGu7nJ9h0iBo6eeI",
    authDomain: "protfolio-42d87.firebaseapp.com",
    projectId: "protfolio-42d87",
    storageBucket: "protfolio-42d87.appspot.com",
    messagingSenderId: "752225140584",
    appId: "1:752225140584:web:c94bca749d3c7a97e860dd",
    measurementId: "G-CHPDHT245Q"
})

const storage = getStorage(firebaseConfig);

export default storage;