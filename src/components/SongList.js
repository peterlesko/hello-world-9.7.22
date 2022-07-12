import { useState } from 'react';
import Song from "./Song"

const SongList = () => {
  
  // const [ulDisplayStyle, setUlDisplayStyle] = useState("none");
  // const [buttonText,setButtonText] = useState("show songs");

  // const toggleVisibility = () => {
  //   if (ulDisplayStyle === "none") {
  //     setUlDisplayStyle("block");
  //     setButtonText("hide songs");
  //     console.log("ul style:  " + ulDisplayStyle);
  //     console.log("button:    " + buttonText);
  //     console.log("------------------------");
  //   }
  //   else { 
  //     setUlDisplayStyle("none");
  //     setButtonText("show songs");
  //     console.log("ul style:  " + ulDisplayStyle);
  //     console.log("button:    " + buttonText);
  //     console.log("------------------------");
  //   }
  // };


  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  }

  return <div>
    <h2>The songs are </h2>
    {/* <button onClick={toggleVisibility}>{buttonText}</button> */}
    <button onClick={toggleVisibility}> {(visible) ? "hide" : "show"} songs </button>

    {/* <ul style={{display: ulDisplayStyle}} >  */}
    <ul style={{display: visible ? "block" : "none"}} >
      <Song name="Hooked on a feeling" singer="Blue Suede" />
      <Song name="Free Bird" singer="Leonard Skinnered" />
      </ul>
  </div>;
}

export default SongList;