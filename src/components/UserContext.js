import { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useState({});

        useEffect(function(){
          const savedUser = localStorage.getItem('user');
          if (savedUser) {
            setLoggedInUser(JSON.parse(savedUser));
          }
        },[])
      
        function login(data) {
          setLoggedInUser(data);
          localStorage.setItem('user',JSON.stringify(data))
        }

        return (
          <UserContext.Provider value={{ loggedInUser, login }}>
            {children}
          </UserContext.Provider>
        );
      };
      
      export function useLogin() {
        return useContext(UserContext);
      }
   