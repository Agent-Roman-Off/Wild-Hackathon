import { useState, useEffect } from 'react';
import decade80 from './80s';

function Decade80() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    setTracks(decade80);
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
export default Decade80;
