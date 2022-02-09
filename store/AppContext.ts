import React from 'react';

const AppContext = React.createContext({
  types: [],
  addCars: car => {}
});

export default AppContext;
