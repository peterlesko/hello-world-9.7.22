import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//VERSION 1 - Pure Javascript
// // const p1 = React.createElement("p", {id : "firstPara"}, "hows it going");
// // const li1 = React.createElement("li", null, "first bullet");
// // const li2 = React.createElement("li", null, "second bullet");
// // const ul = React.createElement("ul", null, [li1, li2]);
// // const ul2 = React.createElement("ul", null, [
// //   React.createElement("li", null, "some contentt"),
// //   React.createElement("li", null, "some content")
// // ]);
// // const myDiv = React.createElement("div", null, [p1, ul, ul2]);


// //VERSION 2 - using JSX
// const p1 = <p style={{background: "#ff0000", "font-size": "14px"}} >hows it going</p>;
// const ul = <ul className="firstList">
//       <li>first</li>
//       <li>second</li>
//     </ul>
//   const myLabel = <label htmlFor="name">Enter yout name</label> 
// const myInput = <input type = "text" id="name" />

// const twoParagraphs = <div><p>para1</p><para>para2</para></div>

// const myName = "Matt"
// const greeting = <p>Hello {myName}</p>

// if (myName === "Matt") {
//   console.log("Hello matt");
// }
// else {
//   console.log("You are not matt");
// }

// //Ternary statement, The same as one above
// myName === "Matt" ? console.log("Hello matt") : console.log("You are not matt");
// const fullName = myName === "Matt" ? "Matt T" : "Unknown";

// //Destructuring
// const numbersArray = [1,2,3,4,5];
// // const first = numbersArray[0];
// // const second = numbersArray;
// const [first, second] = numbersArray;
// console.log(first, second);

// const customer = {name: "matt", age: 32, active: true};
// const {age, active} = customer;
// console.log(age, active);

// const root = ReactDOM.createRoot(document.getElementById('root'));                      
// root.render(ul, document.getElementById("root"));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
