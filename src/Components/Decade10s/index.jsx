import { useState, useEffect } from 'react';
import decade10 from './10s';

function Decade10() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    setTracks(decade10);
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
export default Decade10;
