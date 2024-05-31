import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";
const UserContextProvider =({children}) => {
    const [user,setUser] = useState();
    return (
        <UserContext.Provider value={{user,setUser}}>
                {children}
        </UserContext.Provider>
    )
}
// Step-2 
// Here we are creating a UserContextProvider component that will wrap the children components.
// Here the chilren prop is passed to the UserContextProvider component so that it can wrap the children components.
// The chidren prop will be the components that are wrapped by the UserContextProvider component.
//  The value prop of the UserContext.Provider component is set to an object that contains the user and setUser state variables. and 
//  these values are passed to the children components using the UserContext.Provider component.So that they can access the 
// user and setUser state variables.

export default UserContextProvider