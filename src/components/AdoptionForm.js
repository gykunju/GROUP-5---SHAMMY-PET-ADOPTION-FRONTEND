import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { useLogin } from './UserContext'

function AdoptionForm() {
  
  const [location, setLocation] =useState('')
  const [contact, setContact] =useState('')
  const [reason, setReason] =useState('')
   const { id } = useParams()
  const navigate = useNavigate()
  const [adoptedPets, setAdoptedPets] =useState('')
  const {loggedInUser} = useLogin()
  
  
  function handleSubmit(e) {
    e.preventDefault();
    const details = {
      location,
      contact,
      reason,
      pet_id: id,
      user_id: loggedInUser.id
    };
    if (location.length > 0 && contact.length > 0 && reason.length > 0) {
      fetch(`http://localhost:3000/adoptions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(details),
      })
        .then((response) => response.json())
        .then(() => {
          // Handle the response data here if needed
          navigate('/pets');
        })
        .catch((error) => {
          console.error('Error adopting pet:', error);
          // Handle the error here
        });
    } else {
      alert('Fill the Form');
    }
  }
  

  return (
    <div className='form-div'>
      <h2>Adopt</h2>
      <form onSubmit={handleSubmit} className='form'>
        <label>Location :
          <input placeholder='location' value={location} onChange={(e)=>setLocation(e.target.value)}/>
        </label>
        <label>Number :
          <input placeholder='contact' value={contact} onChange={(e)=>setContact(e.target.value)}/>
        </label>
        <label>Reason : 
          <input placeholder='reason' value={reason} onChange={(e)=>setReason(e.target.value)}/>
        </label>
        <button type='submit'>ADOPT</button>
      </form>
    </div>
  )
}

export default AdoptionForm