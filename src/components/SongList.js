import { useState } from 'react';
import Song from "./Song"

const SongList = () => {

  const initialSongs = [
    { name: "Hooked on a feeling", singer: "Blue Suede", votes: 0 },
    { name: "Free Bird", singer: "Leonard Skinnered", votes: 0 },
    { name: "Teenage Kicks", singer: "Undertones", votes: 0 },
    { name: "Let it be", singer: "Beatles", votes: 0 }
  ];

  const [songs, setSongs] = useState(initialSongs);
  console.log(songs);

  const displaySongs = songs.map((it, index) =>
    <Song key={index} song={it} voteFunction={() => voteForSong(index)} />)

  // displaySongs = [<Song key=1 song={song1}/><Song key=2 song={song2} />]
  console.log(displaySongs);

  // const [song1, setSong1] = useState({name : "Hooked on a feeling", singer : "Blue Suede", votes : 0});
  // const [song2, setSong2] = useState({name : "Free Bird", singer : "Leonard Skinnered", votes : 0});

  const [visible, setVisible] = useState(false);

  // const changeSong = () => {
  //   setSong1({...song1, name : "Out of the Blue"});
  // }

  const toggleVisibility = () => {
    setVisible(!visible);
  }

  // const voteForSong = (whichSong) => {
  //   if (whichSong === 1) {
  //     setSong1({...song1, votes : song1.votes + 1});
  //   }
  //   else {
  //     setSong2({...song2, votes : song2.votes + 1});
  //   }
  // }

  const voteForSong = (arrayPosition) => {
    //   //step1 = create a new array of songs, where we update the vote number as relevant
    //   const songToVote = songs[arrayPosition];
    //   const updatedSong = {...songToVote, votes: songToVote.votes + 1};
    //   let tempSongs = [...songs];
    //   tempSongs[arrayPosition] = updatedSong;
    //   console.log(arrayPosition, updatedSong);
    //  //step2 = call the setter method passing the new array of songs
    //   setSongs(tempSongs);   

    // map version does the same thing as commented code above
    const tempSongs = songs.map((it, idx) => idx === arrayPosition ? { ...it, votes: it.votes + 1 } : it);

    console.log(tempSongs);
    setSongs(tempSongs);
    console(songs);
  }
   
  // cond rendering 5.7.22 1:03:40
  // const showTheSongs = visible ? <ul>{displaySongs}</ul> : "";

  //remove.   added map to voet songs, conf rendering 
  return <div>
    <h2>The songs are </h2>
    <button onClick={toggleVisibility}> {(visible) ? "hide" : "show"} songs </button>
    
    {/* cond rendering 5.7.22 1:03:40  */}
    {/* {showTheSongs} */}

    {/* improved cond rendering  5.7.22 1:05:50 */}
    {visible && <ul>{displaySongs}</ul>}
    {visible && <p>The songs are currently not visible</p>}

    {/* 2 lines below commented out to use cond rendering 5.7.22 1:00:15 */}
    {/* <ul style={{ display: visible ? "block" : "none" }} >    
      {displaySongs} */}

    {/* <ul style={{ display: visible ? "block" : "none" }} >
      {displaySongs}  
      {/* { <Song name="Hooked on a feeling" singer="Blue Suede" /> */}
    {/* <Song song={song1} voteFunction={() => voteForSong(1)} /> */}

    {/* { <Song name="Free Bird" singer="Leonard Skinnered" /> } */}
    {/* <Song song={song2} voteFunction={() => voteForSong(2)} /> */}
    {/* </ul> */}

    {/* <button onClick={changeSong}>Change song 1</button> */}

  </div>;

}

export default SongList;









