import "./styles.css";
import { useLogin } from "./UserContext";
import React, { useEffect, useState } from 'react';

// const PETS = [{ name: "Pet 1" }, { name: "Pet 2" }, { name: "Pet 3" }];
export default function App() {
    const [pets, setPets] = useState([]);
    const { loggedInUser } = useLogin();

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
