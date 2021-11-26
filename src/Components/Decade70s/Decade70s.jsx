import DecadeDetails from 'Components/DecadeDetails/DecadeDetails';
import decade70 from './70s';

const Decade70s = () => {
  return (
    <section className="Section__decade">
      <h1 className="Section__decade-title"> 🪕 Decade 70&#39;s</h1>
      <DecadeDetails decade={decade70} />
    </section>
  );
};

export default Decade70s;
