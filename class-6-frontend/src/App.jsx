import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const App = () => {
  const [jokes, setJokes] = useState([])
  useEffect(()=> {
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    }
    )
    .catch((error)=>{
      console.log(error)
    }
    )
  })

  return (
    <>
      <h1>chai aur fullstack course</h1>
      <p>JOKES:{jokes.length}</p>

      {
        jokes.map((jokes, index)=>(
          <div key={jokes.id}>
            <h3>{jokes.title}</h3>
            <p>{jokes.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
