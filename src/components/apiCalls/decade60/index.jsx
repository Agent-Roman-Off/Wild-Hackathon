import { useState, useEffect } from 'react';
import decade60 from './60s';

function Decade60() {
  const [tracks, setTracks] = useState([]);
  // const [songName, setSongName] = useState('');
  // const [songArtist, setSongArtist] = useState('');
  // const [songArtwork, setSongArtwork] = useState('');

  useEffect(() => {
    //   axios.get(decade10).then(() => {
    // setSongName(decade10.name);
    // setSongArtist(decade10.artist);
    // setSongArtwork(decade10.artwork);
    setTracks(decade60);
    //   });
  }, []);
  console.log(decade60.name);
  return (
    <>
      {tracks.map((track) => {
        return (
          <div>
            <p>
              Song : {track.name}
              Artist: {track.artist}
              <img src={track.artwork} alt="artwork" />
            </p>
          </div>
        );
      })}
    </>
  );
}
export default Decade60;
