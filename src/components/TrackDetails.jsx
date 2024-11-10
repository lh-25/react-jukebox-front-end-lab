

export default function TrackDetails ({selected}) {

  return !selected ? (<div><h1>No Details</h1></div>) : (
    <div className="details">
      <img src={selected.song_image} alt="Album Cover" />
      <ul>
       <li> <strong className="label">Title:</strong> {selected.title}</li>
       <li><strong className="label">Artist:</strong> {selected.artist}</li>
       <li><strong className="label">Album:</strong> {selected.album}</li>
       <li><strong className="label">Duration:</strong>  {selected.duration}</li>
       <li><strong className="label">Release Year:</strong>  {selected.release_year}</li>
       
      </ul>
    </div>
  )
}