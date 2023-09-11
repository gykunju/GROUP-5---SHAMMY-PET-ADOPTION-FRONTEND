
import { useLogin } from "./UserContext";
import React, { useEffect, useState } from 'react';


export default function App() {
    const [pets, setPets] = useState([]);
    const { loggedInUser } = useLogin();

    useEffect(() => {
        // Make an HTTP GET request to fetch pets from the backend
        fetch('/backend-pets-url').then(res => res.json())
          .then(response => {
             setPets(response.data); 
          })
          .catch(error => {
            console.error('Error fetching pets:', error);
          });
      }, []); 

    return (
    <>
    {loggedInUser.admin && <button>Create Pet</button>}
    {pets.map((pet) => (
        <div key={pet.name}>
          <p>{pet.name}</p>
          {loggedInUser.admin && (
            <>
              <button>delete</button>
              </>
          )}
        </div>
      ))}
    </>
  );
}
