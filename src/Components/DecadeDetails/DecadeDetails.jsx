import './DecadeDetails.scss';
import PropTypes from 'prop-types';

const DecadeDetails = ({ decade }) => {
  return (
    <div className="Parent">
      {decade.map((yr, idx) => {
        return (
          <div className={`div${idx + 1} glass`}>
            <h3> Song : {yr.name}</h3>
            <p>Artist: {yr.artist}</p>
            <img src={yr.artwork} alt="artwork" />
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
