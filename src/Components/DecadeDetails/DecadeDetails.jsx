import './DecadeDetails.scss';
import PropTypes from 'prop-types';

const DecadeDetails = ({ decade }) => {
  return (
    <div className="Parent">
      {decade.map((yr, idx) => {
        return (
          <div className={`div${idx + 1} glass`}>
            <h3 className="item-title"> Song : {yr.name}</h3>
            <p className="item-paragraph">Artist: {yr.artist}</p>
            <p className="item-paragraph">Release: {yr.release}</p>
            <img src={yr.artwork} alt="artwork" className="item-img" />
          </div>
        );
      })}
    </div>
  );
};

DecadeDetails.propTypes = {
  decade: PropTypes.arrayOf().isRequired,
};

export default DecadeDetails;
