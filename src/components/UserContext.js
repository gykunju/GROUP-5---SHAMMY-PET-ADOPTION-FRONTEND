import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useState({});
      
        function login(data) {
          setLoggedInUser(data);
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
   