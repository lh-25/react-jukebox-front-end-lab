

export default function NowPlaying({ playing, handlePlayingView }) {

  return !playing ? ('') : (
    <div className="now-playing-bar">
      <div className="playing">
        <img src={playing.song_image} alt="Album Cover" className="album-cover" />
        <ul className="song-details">
          <li> <strong className="labels">Title:</strong> {playing.title}</li>
          <li><strong className="labels">Artist:</strong> {playing.artist}</li>
          <li><strong className="labels">Duration:</strong>  {playing.duration}</li>
          <button onClick={handlePlayingView}>Stop Playing</button>
        </ul>
      </div>
    </div>

  )
}