import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Login/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [users, setUsers] = useState({})
    const [error, setError] = useState("");
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUsers(result.user);
                setError("");
            })
            .finally(() => setIsLoading(false))
            .catch((error) => setError(error.message));
    }
    //observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUsers(user);
            }
            else {
                setUsers({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [])
    // -------------------------------------------------------
    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                setUser(result.user);
                setError("");
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                const uid = user.uid;
            } else {
                // User is signed out
                // ...
            }
        });
    }, []);
    //   ----------------------------------------------


    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .catch((error) => {
                setError("");
            })
            .finally(() => setIsLoading(false));
    }
    return {
        users,
        isLoading,
        signInUsingGoogle,
        handleGithubLogin,
        logOut,
        Error
    }

}
export default useFirebase