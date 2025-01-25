import React from 'react';
import PropTypes from 'prop-types';

const boxStyle = {
  border: '1px solid #2196F3',
  borderRadius: 2,
  height: 20,
  width: 20,
  display: 'flex',
  justifyContent: 'center',
  margin: '0 10px',
};

const getTickStyle = (checked) => ({
  display: checked ? 'block' : 'none',
  height: 6,
  width: 10,
  borderLeft: '2px solid #2196F3',
  borderBottom: '2px solid #2196F3',
  transform: 'rotate(-45deg)',
  top: 4,
  position: 'relative',
});

const Checkbox = (props) => {
  return (
    <label>
      <input type="checkbox" style={{ display: 'none' }} {...props} />
      <div style={boxStyle}>
        <div style={getTickStyle(props.checked)} />
      </div>
    </label>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string,
};

export default Checkbox;
