import { useState } from 'react';
import './Greeting.css'

const Greeting = (props) => {

  console.log("the greeting function is running");

  const [name, setName] = useState(props.name);

  const changeName = () => {
    console.log("I was clicked")
    setName("Mike");
  };

  // console.log(props);
  const ageSentence = `Your age is ${props.age}`;

  return <div>
    <p className="greeting_firstPara">Hello {name}. {ageSentence}</p>

    <button onClick={() => console.log("I was clicked")}>change my name</button>
    <button onClick={changeName}>change my name</button>
  </div>
}

export default Greeting; 