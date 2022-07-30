const Song = (props) => {
             //  {song : {name : songName,     singer : whoSungIt}} // this is format of the props sent from parent
  
  const voteForSong = () => {
    // props.song.votes   //no ability to change like this
    props.voteFunction(); 
  }
  
  return <li>{props.song.name} by {props.song.singer} : {props.song.votes}
      <button onClick={voteForSong}>vote</button>
    </li>
  
                    // {name : songName, singer : whoSungIt}}  //this was format of the props before change
  // return  <li>{props.name} by {props.singer}</li>;
} 

export default Song;