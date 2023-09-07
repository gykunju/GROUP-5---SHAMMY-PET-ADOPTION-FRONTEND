
import { useLogin } from "./UserContext";
import React, { useEffect, useState } from 'react';

// const PETS = [{ name: "Pet 1" }, { name: "Pet 2" }, { name: "Pet 3" }];
export default function App() {
    const [pets, setPets] = useState([]);
    const { loggedInUser } = useLogin();

    useEffect(() => {
        // Make an HTTP GET request to fetch pets from the backend
        fetch('/backend-pets-url').then(res => res.json())
          .then(response => {
             setPets(response.data); 
            // console.log(response) // Assuming the response contains an array of pets
          })
          .catch(error => {
            console.error('Error fetching pets:', error);
          });
      }, []); // Empty dependency array- effect runs once when the component mounts
    

    return (
    <>
    {loggedInUser.admin && <button>Create Pet</button>}
    {pets.map((pet) => (
        <div key={pet.name}>
          <p>{pet.name}</p>
          {loggedInUser.admin && (
            <>
              <button>edit</button>
              <button>delete</button>
              </>
          )}
        </div>
      ))}
    </>
  );
}
