import React, { useState } from "react";
import { TodoItem } from "./TodoItem";
import InputArea from "./InputArea";

function App() {

    const [items, setItems] = useState([]);


    function addItems(inputText){
        setItems(prevItems => {
            return [...prevItems, inputText];
        })
    }

    function deleteItem(id){
      setItems((prevItem) => {
          return prevItem.filter((item, index) =>{
              return index !== id;
       } )
      })
    }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItems}/>
      <div> 
        <ul>
          {items.map((item, index) => {
            return <TodoItem key={index} id={index} text={item} onChecked={deleteItem}/>
          })}
        </ul>
      </div> 
    </div>
  );
}

export default App;
