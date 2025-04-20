import React from 'react';
import { useState } from 'react';

export const UserContext = React.createContext();

export const UserContextProvider = ({ children}) => {
  const [userState, setUserState] = useState({
    userId: 0,
    loggedIn : false
  });
  return (
    <UserContext.Provider value={{ userState, setUserState}}>
      {children}
    </UserContext.Provider>
  );
}