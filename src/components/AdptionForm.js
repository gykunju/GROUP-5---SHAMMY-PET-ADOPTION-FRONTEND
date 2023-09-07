import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'

function AdoptionForm() {
  
  const [location, setLocation] =useState(null)
  const [number, setNumber] =useState(null)
  const [reason, setReason] =useState(null)
  const { id } = useParams()
  const history = useHistory()

  function handleSubmit(e){
    e.preventDefault()
    const details = {
       location,
       contact: number,
       reason,
       pet_id: id,
    }

    fetch("http://localhost:3000/adopteds",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(details)
    })

    history.push('/pets')
  }

  return (
    <div className='adopt-div'>
      <h2>Adopt THEM</h2>
      <form onSubmit={handleSubmit} className='adopt-form'>
        <label>Location :
          <input placeholder='location' value={location} onChange={(e)=>setLocation(e.value)}/>
        </label>
        <label>Number :
          <input placeholder='number' value={number} onChange={(e)=>setNumber(e.value)}/>
        </label>
        <label>Reason : 
          <input placeholder='reason' value={reason} onChange={(e)=>setReason(e.value)}/>
        </label>
        <button type='submit'>ADOPT</button>
      </form>
    </div>
  )
}

export default AdoptionForm