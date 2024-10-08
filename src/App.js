import React, {useState} from "react";
import "./App.css";
import ToDoLists from "./ToDoLists";

//import Navbar from "./components/Navbar";

const App = () => {

const [inputList, setInputList] = useState(" ");
const [Items, setItems] = useState([]);

const itemEvent = (event) => {
    setInputList(event.target.value);
};

const listOfItems = () => {
    setItems((oldItems) =>{
      return [...oldItems, inputList];
    })
}

const deleteItems = (id)=>{
  console.log('deleted');

  setItems((oldItems) =>{
    return oldItems.filter((arrElem, index) =>{
        return index !== id;
    })
  })
}

  return(
  <>
  <div className="main_div">
    <div className="center_div">
      <br />
        <h1> ToDo List </h1>
        <br />
        <input type="text" placeholder="Add an Item" 
        value = {inputList}
        onChange={itemEvent}/>
        <button onClick={listOfItems}> + </button>

        <ol>
            {/*<li> {inputList} </li>*/}
            
            {Items.map( (itemval, index) =>{
               return(
              <ToDoLists  
               key={index}
               id={index}
               text = {itemval}
               onSelect = {deleteItems}
                />
               );
            })}
        </ol>
    </div>
  </div>
  </>
  );
};

export default App;
