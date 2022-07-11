import Song from "./Song"

const SongList = () => {

  return <div>
    <h2>The songs are </h2>
    <ul>
      <Song name="Hooked on a feeling" singer="Blue Suede" />
      <Song name="Free Bird" singer="Leonard Skinnered" />
      <Song name="Free Bird" singer="Leonard Skinnered" />
    </ul>
  </div>;
}

export default SongList;