import React, { useState } from "react";
import "./App.css";
import CardImage from "./CardImage";
import faker from "faker";
const App =()=> {
  const [name,setName] = useState('Alan Smith');
  const onChangeName=()=>{
    setName("Muhamad Fikri");
  }
    return (
      <div className="">
        <h1>App Card React</h1>
        <button className="button" onClick={onChangeName}>Change Name</button>
        <CardImage
          image={faker.image.avatar()}
          name={name}
          job={faker.name.jobTitle()}
        />
       
      </div>
    );
  
}

export default App;
