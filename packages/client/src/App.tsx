
import { useEffect, useState } from 'react'

function App() {
const [message,setMessage]=useState('');

useEffect(()=>{
   fetch('api/test')
   .then(res=>res.json())
   .then(data => setMessage(data.message));
},[])
  return( 
    <p className='font-bold p-4 bg-blue-200'>{message}</p>
   )
}

export default App
