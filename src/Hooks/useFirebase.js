import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.initialize";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
// import {  useLocation, useNavigate } from "react-router-dom";

initializeAuthentication();

const useFirebase = () => {
    // eslint-disable-next-line
    const [user, setUser] = useState({});
    // eslint-disable-next-line
    const [error, setError] = useState('');

    const auth = getAuth();

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
                localStorage.clear();
                window.location.reload();
            })
    }

        useEffect(() => {
            onAuthStateChanged(auth, user => {
                if (user) {
                    setUser(user);
                }
            });
            //eslint-disable-next-line
        }, [])

    const registerUser = (user)=>{
        const name = user.displayName;
        const email = user.email;
        const phone = user.phoneNumber;
        const photo = user.photoURL;
        const password = user?.password || '';
        const user_created_date = user.user_created_date;
        const from_demo = user.fromDemo;
        const from_login = user.fromLogin;

        const newUser = {name, email, phone, photo, password, user_created_date, from_demo, from_login };
        localStorage.setItem('email', newUser.email);
        // localStorage.setItem('user', JSON.stringify(newUser));
        setUser(newUser);
        // fetch('https://skillshikhun.herokuapp.com/addUser',{
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(newUser)
        // })
        // .then(res => res.json())
    }

    return {
        user,
        setUser,
        error,
        registerUser,
        logOut,
        onAuthStateChanged,
        getAuth
    }
}

export default useFirebase;