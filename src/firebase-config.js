import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCuoHeiDLCSWljBhbIB6RySEuChVW1yP3E",
    authDomain: "fir-basis-d29fe.firebaseapp.com",
    projectId: "fir-basis-d29fe",
    storageBucket: "fir-basis-d29fe.appspot.com",
    messagingSenderId: "87536006022",
    appId: "1:87536006022:web:bc70b6bf36325a8b92f207",
    measurementId: "G-PC9FT522S1"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)