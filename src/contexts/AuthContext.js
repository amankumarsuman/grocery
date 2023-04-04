import { useState, useEffect, useContext, createContext} from "react";
import { Auth, DataStore } from 'aws-amplify'
import { User } from "./../models";


const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
    const [authUser, setauthUser] = useState(null)
    const [dbUser, setDbuser] = useState(null)

    const sub = authUser?.attributes?.sub

    // get currently logged in user from cognito
    useEffect(() => {
        Auth.currentAuthenticatedUser({ bypassCache: true }).then(setauthUser)
    }, [])


    // get currently logged in user from database
    useEffect(() => {
        DataStore.query(User, (user) => user.sub('eq', sub))
            .then((user) => {
                setDbuser(user[0])
                console.log(user[0], 'usersrsrsrs')
            })
    }, [sub])

    return (

        <AuthContext.Provider
            value={{ authUser, dbUser, setDbuser, sub }}
        >
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext)