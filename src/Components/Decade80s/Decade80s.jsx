import DecadeDetails from 'Components/DecadeDetails/DecadeDetails';
import decade80 from './80s';


const Decade80s = () => {
  return (
    <section className="Section__decade">
      <h1 className="Section__decade-title"> 🪕 Decade 80&#39;s</h1>
      <DecadeDetails decade={decade80} />
    </section>
  );
};

export default Decade80s;
