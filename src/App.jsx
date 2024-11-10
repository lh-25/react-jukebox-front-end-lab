import { useState, useEffect } from "react"
import * as trackService from './services/trackService'
import TrackList from "./components/TrackList"
import TrackDetails from "./components/TrackDetails"
import TrackForm from "./components/TrackForm"
import NowPlaying from "./components/NowPlaying"
import './App.css'


export default function App () {
const [trackList, setTrackList] = useState([])
const [selected, setSelected] = useState(null)

useEffect(() => {
const getTracks = async () => {
  try {
    const tracks = await trackService.index()
    if (tracks.error) {
      throw new Error(tracks.error)
    }
    setTrackList(tracks)
  } catch (error) {
    console.log(error)
  }
}
getTracks()
}, [])

const updateSelected = (track) => {
  setSelected(track)
}
  return (
    <>
    <TrackList trackList={trackList} updateSelected={updateSelected}/>
    <TrackDetails  selected={selected}/>
    <TrackForm  />
    <NowPlaying />
    </>

  )
}
