import React from 'react';
import axios from 'axios';
import  {useState} from 'react';
import Alert from 'react-bootstrap/Alert';
import './Home.css';


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
        {  state.map((obj,index)=>{
            return(
                <div key={index} className='container'>
                    <Alert  variant='success'>
                        {index + 1} {obj.title} {obj.description}
                    </Alert>
                </div>
            )
        })}
    </div>
  )
}

export default Home