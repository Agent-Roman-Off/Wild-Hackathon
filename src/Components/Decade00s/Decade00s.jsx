import DecadeDetails from 'Components/DecadeDetails/DecadeDetails';
import decade00 from './00s';


const Decade00s = () => {
  return (
    <section>
      <section className="Section__decade">
        <h1 className="Section__decade-title"> 🪕 Decade 00&#39;s</h1>
        <DecadeDetails decade={decade00} />
      </section>
    </section>
  );
};
export default Decade00s;
