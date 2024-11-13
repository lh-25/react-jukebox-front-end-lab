

export default function TrackList({ trackList, updateSelected, handleFormView, isFormOpen, handleDeleteTrack, updatePlaying }) {

  const tracks = trackList.map((track) => (

    <a key={track._id}>
      <li className="list">{track.title} by {track.artist}
        <button onClick={() => updatePlaying(track)}>Play</button>
        <button onClick={() => updateSelected(track)}>Details</button>
        <button onClick={() => handleDeleteTrack(track._id)}>Delete</button>
      </li>
    </a>


  ))
  return (
    <div>
      <h1>TrackList</h1>
      {!trackList.length ? <h2>No Tracks Yet!</h2> : <ul className="trackList">{tracks}</ul>}

      <button onClick={handleFormView}>
        {isFormOpen ? 'Close Form' : 'Add Track'}
      </button>
    </div>
  )
}