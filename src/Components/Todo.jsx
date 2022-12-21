import React from 'react';
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';

const Todo = () => {
    const [data,SetData]=useState([]);
    const [check,setCheck]= useState(true)
    const [counttrue,setCounttrue] = useState(0)
    const [countfla,setCountfla] = useState(0)
 
   

    const url = "https://jsonplaceholder.typicode.com/todos "


    const handleClick = (id) => {
      let _todos = [...data];
      _todos[id].completed = !_todos[id].completed
      setCheck(_todos)
      if(_todos[id].completed == true){
        setCounttrue(counttrue+1)
      }
      else if(_todos[id].completed == false){
        setCountfla(countfla+1)
      }
      
    }
 /*  const countt = (()=>{
   if(data.completed == true){
    setCounttrue(counttrue+1)
   }
   else if (data.completed == false){
    setCountfla(countfla+1)
   }
  }) */
   
    
    useEffect(()=>{
        axios.get(`${url}`).then((res)=>{
           /*  console.log(res) */
            SetData(res.data)
            }).catch((err)=>{
                console.log(err)
            }) 
            
    },[])
    console.log(data)
  return (
    <div>
        <div className='container' >
            <h1>Todos</h1>
            
            <div >counttrue = {counttrue}</div>
            <div>countflase = {countfla}</div>
           
          {
            data.map((todo,id)=>{
                return(
                    <div key={id}>
                      
                        
                    <ul>
                        <li>{todo.title}</li>
                        
                    </ul>
                    <input
                    type={"checkbox"}
                    checked={todo.completed}
                    onChange={() => handleClick(id)}
                  />
                    
                    {
                      todo.completed === true ? <div >true</div> : <div >false</div>
                    }
                   
                   
                </div>

                )
               
            })
          }
        </div>
      
    </div>
  )
}

export default Todo;
