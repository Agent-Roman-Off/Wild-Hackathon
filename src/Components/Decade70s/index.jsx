import { useState, useEffect } from 'react';
import decade70 from './70s';

function Decade70() {
  const [tracks, setTracks] = useState([]);
  // const [songName, setSongName] = useState('');
  // const [songArtist, setSongArtist] = useState('');
  // const [songArtwork, setSongArtwork] = useState('');

  useEffect(() => {
    //   axios.get(decade70).then(() => {
    // setSongName(decade70.name);
    // setSongArtist(decade70.artist);
    // setSongArtwork(decade70.artwork);
    setTracks(decade70);
    //   });
  }, []);
  console.log(decade70.name);
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
export default Decade70;
