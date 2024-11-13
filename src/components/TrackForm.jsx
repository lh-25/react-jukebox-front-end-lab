import { useState } from 'react';

export default function TrackForm({ handleAddTrack, selected, handleUpdateTrack }) {

  const initialState = {
    title: " ",
    artist: " ",
    album: " ",
    duration: " ",
    release_year: " ",
    song_image: " ",

  }
  // formData state to control the form
  const [formData, setFormData] = useState(selected ? selected : initialState);
  // handleChange function to update formData state
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmitForm = (evt) => {
    evt.preventDefault()
    if (selected) {
      handleUpdateTrack(formData, selected._id)
    } else {
      handleAddTrack(formData)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="title"> Title </label>
        <input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <label htmlFor="artist"> Artist </label>
        <input
          id="artist"
          name="artist"
          value={formData.artist}
          onChange={handleChange}
        />
        <label htmlFor="duration"> Duration </label>
        <input
          id="duration"
          value={formData.duration}
          name="duration"
          onChange={handleChange}
        />
        <label htmlFor="album"> Album </label>
        <input
          id="album"
          name="album"
          value={formData.album}
          onChange={handleChange}
        />
        <label htmlFor="release_year"> Release Year </label>
        <input
          id="release_year"
          value={formData.release_year}
          name="release_year"
          onChange={handleChange}
        />
        <label htmlFor="song_image"> Album Cover (Image Address) </label>
        <input
          id="song_image"
          value={formData.song_image}
          name="song_image"
          onChange={handleChange}
        />


        <button type="submit">{selected ? 'Update Track' : 'Add New Track'}</button>
      </form>
    </div>
  );
};