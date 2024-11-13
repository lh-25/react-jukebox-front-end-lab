

export default function TrackDetails({ selected, handleFormView, handleDeleteTrack }) {

  return !selected ? ('') : (
    <div className="details">
      <img src={selected.song_image} alt="Album Cover" />
      <ul>
        <li> <strong className="label">Title:</strong> {selected.title}</li>
        <li><strong className="label">Artist:</strong> {selected.artist}</li>
        <li><strong className="label">Album:</strong> {selected.album}</li>
        <li><strong className="label">Duration:</strong>  {selected.duration}</li>
        <li><strong className="label">Release Year:</strong>  {selected.release_year}</li>

        <button onClick={() => handleFormView(selected)}>
          Edit
        </button>
        <button onClick={() => handleDeleteTrack(selected._id)}>
          Delete
        </button>


      </ul>
    </div>
  )
}