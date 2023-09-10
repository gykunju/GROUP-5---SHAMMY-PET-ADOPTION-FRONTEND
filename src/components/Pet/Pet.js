// import React, { useState, useEffect } from 'react';
// import { Card, Image } from 'semantic-ui-react';
// import './Pet.css'

// function Pet() {
//   const [pets, setPets] = useState([]);

//   useEffect(() => {
//     fetch("") 
//       .then((response) => response.json())
//       .then((data) => setPets(data))
//       .catch((error) => console.error('Error fetching pets:', error));
//   }, []);

//   return (
//     <div>
//       <h1>Pet List</h1>
//       <Card.Group>
//         {pets.map((pet) => (
//           <Card key={pet.id}>
//             <Image src={pet.image_url} alt={pet.name} />
//             <Card.Content>
//               <Card.Header>{pet.name}</Card.Header>
//               <Card.Meta>Age: {pet.age}</Card.Meta>
//               <Card.Description>About: {pet.about}</Card.Description>
//             </Card.Content>
//           </Card>
//         ))}
//       </Card.Group>
//     </div>
//   );
// }

// export default Pet;




import React, { useState, useEffect } from 'react';
import { Card, Image } from 'semantic-ui-react';
import './Pet.css';
import { useLogin } from "../UserContext";
import { useNavigate } from "react-router-dom";


function Pet() {
  const [pets, setPets] = useState([]);
  const { loggedInUser } = useLogin();

  
  const navigate = useNavigate();
  
  
  useEffect(() => {
    fetch('http://localhost:3000/pets') 
      .then((response) => response.json())
      .then((data) => setPets(data))
      .catch((error) => console.error('Error fetching pets:', error));
  },[]);

  function handleClick(id){
    navigate(`/pets/${id}`)
  }

  function handleCreate(){
    navigate("/create")
  }

  function handlePets(){
    navigate("/adoptedpets")
  }

  function handleDelete(id){
    fetch(`http://localhost:3000/pets/${id}`,{
      method: 'DELETE'
    }).then(res => {
      if (res.ok) {
        setPets((prevPets) => prevPets.filter((pet) => pet.id !== id));
        alert ("pet deleted")
      }
      else {
        alert ("failed")
      }
    })
  }

  return (
    <div className="pet-container">
      <h1 className="pet-title">Pet List</h1>
      <button onClick={handlePets} className='pet-button'>ADOPTED PETS</button>
      {loggedInUser?.admin && <button onClick={handleCreate}>Create Pet</button>}
      <Card.Group>
        {pets.map((pet) => (         
          <Card key={pet.id} className="pet-card" >
            <Image src={pet.image} alt={pet.name} className="pet-image" />
            <Card.Content>
              <Card.Header onClick={()=>handleClick(pet.id)}>{pet.name}</Card.Header>
              <Card.Meta>Age: {pet.age}</Card.Meta>
              <Card.Description className="pet-details">About: {pet.description}</Card.Description>
              {loggedInUser?.admin && (
                <>
                <button>edit</button>
                <button onClick={() => handleDelete(pet.id)}>delete</button>
                </>
              )}
            </Card.Content>
          </Card>
            ))}
      </Card.Group>
    </div>
  );
}

export default Pet;