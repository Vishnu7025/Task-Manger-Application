import React from 'react'
import axios from 'axios'
import  {useState} from 'react'

function Home() {
    const [state,setState]= useState([])
  return (
    <div className='container'>
        <button  onClick={()=>{
              axios.get('http://127.0.0.1:8000/api/tasks/').then((response)=>{
                console.log(response.data)
                setState(response.data)
            }) 
        }}>Click here</button>
        {state.map((obj,index)=>{
            return(
                <div>
                    <h1>{index+1}</h1>
                    <h4>{obj.title}</h4>
                    <h4>{obj.description}</h4>
                </div>
            )
        })}
    </div>
  )
}

export default Home