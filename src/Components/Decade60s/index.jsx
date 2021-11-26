import { useState, useEffect } from 'react';
import decade60 from './60s';

function Decade60() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    setTracks(decade60);
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
export default Decade60;
