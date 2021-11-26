import DecadeDetails from 'Components/DecadeDetails/DecadeDetails';
import decade90 from './90s';


const Decade90s = () => {
  return (
    <section className="Section__decade">
      <h1 className="Section__decade-title"> 🪕 Decade 90&#39;s</h1>
      <DecadeDetails decade={decade90} />
    </section>
  );
};

export default Decade90s;
