import { useState } from 'react';
import Song from "./Song"

const SongList = () => {

  const [song1, setSong1] = useState({name : "Hooked on a feeling", singer : "Blue Suede", votes : 0});
  const [song2, setSong2] = useState({name : "Free Bird", singer : "Leonard Skinnered", votes : 0});

  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  }

  const changeSong = () => {
    setSong1({...song1, name : "Out of the Blue"});
  }

  const voteForSong = (whichSong) => {
    if (whichSong === 1) {
      setSong1({...song1, votes : song1.votes + 1});
    }
    else {
      setSong2({...song2, votes : song2.votes + 1});
    }
  }

  return <div>
    <h2>The songs are </h2>
    <button onClick={toggleVisibility}> {(visible) ? "hide" : "show"} songs </button>

    <ul style={{display: visible ? "block" : "none"}} >
      {/* <Song name="Hooked on a feeling" singer="Blue Suede" /> */}
      <Song song={song1} voteFunction={() => voteForSong(1)} />

      {/* <Song name="Free Bird" singer="Leonard Skinnered" /> */}
      <Song song={song2} voteFunction={() => voteForSong(2)} />
    </ul>

    <button onClick={changeSong}>Change song 1</button>
  
  </div>;
}

export default SongList;









