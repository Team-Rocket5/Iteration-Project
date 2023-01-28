import React, {useContext} from 'react';
import ResultCards from '../components/ResultCards.jsx';
import SearchFilter from '../components/SearchFilter.jsx';
import SearchContext from '../SearchContext.jsx';

const HomePage = () => {
  const [landlord] = useContext(SearchContext);


  return (
    <>
      <div className='w-[80%] flex flex-col mx-auto mt-40'>
        <h1 className='text-4xl mb-8 font-bold text-dark text-center'>
          Search For a Landlord
        </h1>
        <div className='w-[800px] mx-auto'>
          <SearchFilter />
        </div>
        <div className='flex flex-wrap mt-5 justify-center w-[70%] mx-auto'>
            {
              landlord.map((person)=>{
                return (
                  <ResultCards
                    key={person.id}
                    name={person.name}
                    location={person.location}
                    neighborhood={person.neighborhood}
                    rating={person.rating}
                    id={person.id}
                  />
                );
              }
            )}
        </div>
      </div>
    </>
  );
}

export default HomePage