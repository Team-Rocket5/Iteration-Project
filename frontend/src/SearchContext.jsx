import React, { createContext, useState } from 'react';

export function SearchProvider({ children }) {

  const [landlord, setLandlord] = useState([]);

  return (
    <SearchContext.Provider value={[landlord, setLandlord]}>
      {children}
    </SearchContext.Provider>
  );
}

const SearchContext = createContext();

export default SearchContext;
