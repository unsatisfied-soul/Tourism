//firebase initialize for firebase config
import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const InitAuthentication = () => {
    initializeApp(firebaseConfig)
}

export default InitAuthentication