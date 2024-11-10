

export default function TrackList ({trackList, updateSelected}) {

  const tracks = trackList.map((track) => (
    
     <a key={track._id}> 
     <li className="list">{track.title} by {track.artist} 
      <button onClick={ () => updateSelected(track)}>Play</button>
      <button>Delete</button>
      </li> 
    </a>

   
  ))
  return (
    <div> 
    <h1>TrackList</h1>
    {!trackList.length ? <h2>No Tracks Yet!</h2> : <ul>{tracks}</ul>}
    </div>
  )
}