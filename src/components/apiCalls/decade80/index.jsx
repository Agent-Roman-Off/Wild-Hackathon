import { useState, useEffect } from 'react';
import decade80 from './80s';

function Decade80() {
  const [tracks, setTracks] = useState([]);
  // const [songName, setSongName] = useState('');
  // const [songArtist, setSongArtist] = useState('');
  // const [songArtwork, setSongArtwork] = useState('');

  useEffect(() => {
    //   axios.get(decade80).then(() => {
    // setSongName(decade80.name);
    // setSongArtist(decade80.artist);
    // setSongArtwork(decade80.artwork);
    setTracks(decade80);
    //   });
  }, []);
  console.log(decade80.name);
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
export default Decade80;
