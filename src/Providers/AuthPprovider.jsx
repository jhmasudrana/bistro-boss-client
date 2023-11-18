import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthPprovider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosSecure = useAxiosPublic()
    // googleProvider
      const googleProvider = new GoogleAuthProvider();
      
    // password authentication
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // password authentication
    const singIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // logOut
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }
    const updateUserprofile = (name, photo) => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL:photo 
        })
    }
  const googlesignIn = () =>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if(currentUser){
            // get token and 
            const userInfo = {email: currentUser.email}
            axiosSecure.post('/jwt', userInfo)
            .then(res =>{
                if(res.data.token){
                    localStorage.setItem('access-token', res.data.token)
                }
            })
            }else{
              localStorage.removeItem('access-token')
            }
            setLoading(false);
        });

        return () => {
            return unsubscribe();
        };
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        singIn,
        logOut,
        updateUserprofile,
        googlesignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthPprovider;