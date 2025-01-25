/**
 * Creates string in the format "{stopsQuantity} пересад{ка|ки|ок}"
 * (this function does not work correctly with stops more then 20)
 *
 * @param {number} stopsQuantity - The number of stops
 * @returns {string} The formatted string
 */
export const getStopsQuantityString = (stopsQuantity) => {
  let stopsCounter = '';

  if (stopsQuantity) {
    let end = 'ок';

    if (stopsQuantity === 1) {
      end = 'ка';
    } else if (stopsQuantity >= 2 && stopsQuantity <= 4) {
      end = 'ки';
    }

    stopsCounter = `${stopsQuantity} пересад${end}`;
  }

  return stopsCounter;
};

/**
 * Converts duration to string in the format "{HH}ч {mm}м"
 *
 * @param {number} duration - The flights duration in minutes
 * @returns {string} The formatted string
 */
export const getDurationString = (duration) => {
  const hours = ~~(duration / 60);
  let minutes = duration % 60;
  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  return `${hours}ч ${minutes}м`;
};

/**
 * Creates string with departure and arrival times
 *
 * @param {Date} departureDate  - The departure date
 * @param {number} duration - The flight duration
 * @returns {string} The formatted string
 */
export const getFlightTimes = (departureDate, duration) => {
  const arriveDate = calculateArriveDate(departureDate, duration);

  return `${formatTime(departureDate)} - ${formatTime(arriveDate)}`;
};

const formatTime = (date) => {
  return date.toLocaleTimeString('ru', { hour: '2-digit', minute: '2-digit' });
};

const calculateArriveDate = (departureDate, duration) => {
  return new Date(departureDate.getTime() + duration * 60 * 1000);
};
