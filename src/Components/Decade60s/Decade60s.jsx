import DecadeDetails from '../DecadeDetails/DecadeDetails';
import './Decade60s.scss';
import decade60 from './60s';

const Decade60s = () => {
  return (
    <section className="Section__decade">
      <h1 className="Section__decade-title"> 🪕 Decade 60&#39;s</h1>
      <DecadeDetails decade={decade60} />
    </section>
  );
};

export default Decade60s;
