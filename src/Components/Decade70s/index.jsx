import { useState, useEffect } from 'react';
import decade70 from './70s';

function Decade70() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    setTracks(decade70);
  }, []);

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
