import React from 'react';
import { connect } from 'react-redux';

import { setOrderBy } from '../store/actions';

import '../style/sort-tabs.css';

export const SortTabs = ({ orderBy, setOrderBy }) => {
  const orderOptions = {
    price: 'Самый дешевый',
    duration: 'Самый быстрый',
  };

  const chosenStyle = {
    border: 'none',
    background: '#2196F3',
    color: '#FFFFFF',
  };

  const getChosenStyle = (option) => (orderBy === option ? chosenStyle : {});

  const clickHandler = (key) => {
    if (key !== orderBy) {
      setOrderBy(key);
    }
  };

  return (
    <div className="tabs-container">
      {Object.entries(orderOptions).map(([key, label]) => (
        <div style={getChosenStyle(key)} onClick={() => clickHandler(key)} key={key}>
          {label}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  orderBy: state.orderBy,
});

const mapDispatchToProps = {
  setOrderBy,
};

export default connect(mapStateToProps, mapDispatchToProps)(SortTabs);
