// import axios from 'axios';
import { useState, useEffect } from 'react';
import decade10 from './10s';

function Decade10() {
  const [tracks, setTracks] = useState([]);
  // const [songName, setSongName] = useState('');
  // const [songArtist, setSongArtist] = useState('');
  // const [songArtwork, setSongArtwork] = useState('');

  useEffect(() => {
    //     // axios.get(decade60).then((data) => {
    //     // setSongName(decade10[i]?.track?.name);
    //     // setSongArtist(decade10[i]?.track?.album?.artists?.name);
    //     // setSongArtwork(decade10[i]?.track?.album?.images[1]?.url);
    setTracks(decade10);
    //     // });
  }, []);
  console.log(tracks);
  return (
    <>
      {tracks.map((track) => {
        return <h2>{track?.name}</h2>;
      })}
      {/* <div>
        <p>
          Song : {songName}
          Artist: {songArtist}
          <img src={songArtwork} alt="artwork" />
        </p>
      </div> */}
    </>
  );

  // decade60 start??

  //   import axios from 'axios';
  // import '../jsonfiles/10s2.json';

  // function Decade60() {
  //   axios
  //     .get('../../jsonfiles/10s.json')
  //     .then((data) => {})
  //     .catch(() => {});
  //   return (
  //     <>
  //       <div>
  //         <p>
  //           Song : {items.track.name}
  //           Artist: {track.album.artists.name}
  //           <img src={track.images} alt="artwork" />
  //         </p>
  //       </div>
  //     </>
  //   );
  // }
  // export default Decade60;
}
export default Decade10;
