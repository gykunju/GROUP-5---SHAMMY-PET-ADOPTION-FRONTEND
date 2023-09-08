import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreatePets() {

    const [name, setName] = useState(0)
    const [image, setImage] = useState(0)
    const [age, setAge] = useState(0)
    const [description, setDescription] = (0)

    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDeault()

        const data = {
            name,
            image,
            age,
            description,
            species
        }

        fetch('http://localhost:3000/adoptions',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>{
            if (res.ok){
                alert("Pet created")
                navigate('/pets')
            }else{
                alert("Create failed")
            }
        })
    }

  return (
    <div>
        <form onSubmit={handleSubmit} className='adopt-form'>
        <label>Name :
          <input placeholder='name' type='text'value={name} onChange={(e)=>setName(e.target.value)}/>
        </label>
        <label>Age :
          <input placeholder='age' type='number' value={age} onChange={(e)=>setAge(e.target.value)}/>
        </label>
        <label>Image : 
          <input placeholder='image' type="image" value={image} onChange={(e)=>setImage(e.target.value)}/>
        </label>
        <label>Description : 
          <input placeholder='description' type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/>
        </label>
        <button type='submit'>ADOPT</button>
      </form>
    </div>
  )
}

export default CreatePets