import { useState, useEffect } from 'react';
import decade90 from './90s';

function Decade90() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    setTracks(decade90);
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
export default Decade90;
