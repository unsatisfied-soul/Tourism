import { useEffect, useState } from "react"
import InitAuthentication from "../../Firebase/Firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword , onAuthStateChanged, deleteUser, signOut } from "firebase/auth";


InitAuthentication();
const useFirebase = () => {
    const [user,setUser] = useState({});
    const [error,setError] = useState('')
    const[loading,setLoading] = useState(true)
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
    const userInfo = auth.currentUser; 

    //googlesign in
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
        
    }
    

    //currently signed in user
    useEffect(()=> {
        onAuthStateChanged(auth, user => {
            if(user) {
                setUser(user)
            }
        })
    },[])


    //observe user state change 
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth,user=> {
            if(user) {
                setUser(user)
            }else{
                setUser({})
            }
            setLoading(false)
        })
        return () => unsubscribe
    },[])

    //logout
    const deletaccount = () => {
        deleteUser(userInfo)
        .then(() => {
            setUser({})
        })
    }
    const logout = () => {
        setLoading(true)
        signOut(auth).then(()=> {
            setUser({})
        })
        .finally(()=> setLoading(false))
    }

    return {
        signInWithGoogle,
        user,
        error,
        deletaccount,
        logout,
        loading
    }
}

export default useFirebase