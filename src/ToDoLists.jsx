import React from 'react';
import { FaXmark } from "react-icons/fa6";


const ToDoLists = (props) => {
    
    return (
    <>
    <div className='todo_style'>
   <div className='xmark'>
    <FaXmark 
        onClick={() =>{
            props.onSelect(props.id);
        }}
        />
        </div>

    <li> 
        {props.text} </li>

    </div>
    </>
    );
};

export default ToDoLists;