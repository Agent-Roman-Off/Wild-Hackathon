import DecadeDetails from 'Components/DecadeDetails/DecadeDetails';
import decade10 from './10s';

const Decade10s = () => {
  return (
    <section className="Section__decade">
      <h1 className="Section__decade-title"> 🪕 Decade 10&#39;s</h1>
      <DecadeDetails decade={decade10} />
    </section>
  );
};

export default Decade10s;
