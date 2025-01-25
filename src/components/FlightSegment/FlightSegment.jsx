import React from 'react';
import PropTypes from 'prop-types';

import { getDurationString, getFlightTimes, getStopsQuantityString } from '../functions/functions';

const FlightSegment = ({ origin, destination, date, duration, stops = [] }) => (
  <div className="flight-segment">
    <div className="segment-part">
      <div>
        {origin} - {destination}
      </div>
      <div>{getFlightTimes(new Date(date), duration)}</div>
    </div>
    <div className="segment-part">
      <div>в пути</div>
      <div>{getDurationString(duration)}</div>
    </div>
    <div className="segment-part">
      <div>{getStopsQuantityString(stops.length)}</div>
      <div>{stops.join(', ')}</div>
    </div>
  </div>
);

FlightSegment.propTypes = {
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  stops: PropTypes.arrayOf(PropTypes.string),
};

export default FlightSegment;
