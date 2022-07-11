import './Greeting.css'

const Greeting = (props) => {

  console.log(props);
  const ageSentence = `Your age is ${props.age}`;
  return <p className="greeting_firstPara">Hello {props.name}. {ageSentence}</p>;
}

export default Greeting; 