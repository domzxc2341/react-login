import {CreateContext} from 'react'

const UserContext = CreateContext ()


export const AuthContextProvider = ({children}) => {
    return (
            <UserContext.Provider value={}>
                {children}
            </UserContext.Provider>
    )
}

export const UserAuth = () => {
return UserContext(UserContext)
}