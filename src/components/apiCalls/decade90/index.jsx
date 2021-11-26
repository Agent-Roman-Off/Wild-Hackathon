import { useState, useEffect } from 'react';
import decade90 from './90s';

function Decade90() {
  const [tracks, setTracks] = useState([]);
  // const [songName, setSongName] = useState('');
  // const [songArtist, setSongArtist] = useState('');
  // const [songArtwork, setSongArtwork] = useState('');

  useEffect(() => {
    //   axios.get(decade90).then(() => {
    // setSongName(decade90.name);
    // setSongArtist(decade90.artist);
    // setSongArtwork(decade90.artwork);
    setTracks(decade90);
    //   });
  }, []);
  console.log(decade90.name);
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
export default Decade90;
