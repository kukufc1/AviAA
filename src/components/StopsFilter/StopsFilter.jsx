import React from 'react';
import { connect } from 'react-redux';

import { setStopsFilter } from '../store/actions';
import FilterOption from '../FilterOption/FilterOption';

import '../style/stops-filter.css';

const options = new Map();
options.set(0, 'Без пересадок');
options.set(1, '1 пересадка');
options.set(2, '2 пересадки');
options.set(3, '3 пересадки');

export const StopsFilter = ({ allOptions = options, filterBy, setFilterBy }) => {
  const [chooseAll, setChooseAll] = React.useState(false);

  const isChecked = (key) => filterBy.includes(key);

  const changeHandler = (key) => {
    let newFilterBy;
    if (isChecked(key)) {
      newFilterBy = filterBy.filter((f) => f !== key);
      if (chooseAll) {
        setChooseAll(false);
      }
    } else {
      newFilterBy = [...filterBy, key];
      if (allOptions.size === newFilterBy.length) {
        setChooseAll(true);
      }
    }

    setFilterBy(newFilterBy);
  };

  const chooseAllHandler = () => {
    if (chooseAll) {
      setChooseAll(false);
      setFilterBy([]);
    } else {
      setChooseAll(true);
      setFilterBy(Array.from(allOptions.keys()));
    }
  };

  return (
    <div className="filter-container">
      <div style={{ margin: '0 20px 10px 20px' }}>количество пересадок</div>
      <FilterOption checked={chooseAll} onChange={chooseAllHandler} value="Все" id="all" />
      {Array.from(allOptions).map(([key, value]) => (
        <FilterOption
          id={key.toString()}
          checked={isChecked(key)}
          onChange={() => changeHandler(key)}
          value={value}
          key={key.toString()}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  filterBy: state.stopsFilter,
});

const mapDispatchToProps = {
  setFilterBy: setStopsFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(StopsFilter);
