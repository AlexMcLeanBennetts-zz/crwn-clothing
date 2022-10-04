import { useEffect } from "react";

import { getRedirectResult } from "firebase/auth";

import {
    auth,
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInWithGoogleRedirect
} from "../../utils/firebase/firebase.utils";


const Login = () => {

    useEffect(() => {
        const getResponse = async () => {
            getRedirectResult(auth)
                .then(res => res)
        };
        const response = getResponse();
        console.log(response)
    }, [])

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log(userDocRef)
    }

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign in</button>
            <button onClick={signInWithGoogleRedirect}>Sign in with google redirect</button>
        </div>
    )
}

export default Login;