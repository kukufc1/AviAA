import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Loader from '../Loader/Loader';
import StopsFilter from '../StopsFilter/StopsFilter';
import TicketsList from '../TicketsList/TicketsList';
import { requestSearchId } from '../store/actions';

import '../style/app.css';

export const App = ({ isLoading, requestSearchId }) => {
  useEffect(() => {
    requestSearchId();
  }, [requestSearchId]); // Добавляем requestSearchId в зависимости

  return (
    <div className="app">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <StopsFilter />
          <TicketsList />
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
});

const mapDispatchToProps = {
  requestSearchId,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
