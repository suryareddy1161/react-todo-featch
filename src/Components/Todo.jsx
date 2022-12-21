import React from 'react';
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';

const Todo = () => {
    const [data,SetData]=useState([]);
    const [check,setCheck]= useState(true)
    const [count,setCount] = useState(0)
   

    const url = "https://jsonplaceholder.typicode.com/todos "
    const checkbox=((e)=>{
        
        setCheck({check,[e.target.name]:e.target.value})
        setCount(count+1)
    })
    
    useEffect(()=>{
        axios.get(`${url}`).then((res)=>{
            console.log(res)
            SetData(res.data)
            }).catch((err)=>{
                console.log(err)
            })
    },[])
  return (
    <div>
        <div className='container' >
            <h1>Todos</h1>
            <div> count = {count} </div>
          {
            data.map((todo,id)=>{
                return(
                    <div key={id}>
                        
                    <ul>
                        <li>{todo.title}</li>
                    
                    </ul>
                    <input type={'checkbox'} onClick={checkbox} defaultChecked={todo.completed}></input>
                </div>
                )
               
            })
          }
        </div>
      
    </div>
  )
}

export default Todo;
