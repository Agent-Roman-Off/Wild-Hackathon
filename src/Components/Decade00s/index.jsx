import { useState, useEffect } from 'react';
import decade00 from './00s';

function Decade00() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    setTracks(decade00);
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
export default Decade00;
