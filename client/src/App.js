import React, { useState, useEffect } from 'react';
import LondonMap from './components/map/LondonMap';
import Form from './components/form/Form';
import Navigation from './components/navigation/Navigation';
import { getPlaceByName } from './api/place';

function App() {
  const [searchName, setSearchName] = useState();
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [totalPlace, setTotalPlace] = useState(1);
  const [listOfGeoJson, setListOfGeoJson] = useState([]);

  const [listOfTypeOfPlace, setListOfTypeOfPlace] = useState([]);
  const [listOfTypeOfLand, setListOfTypeOfLand] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPlace = async () => {
      const data = await getPlaceByName(searchName);
      setTotalPlace(data.length || 1);
      setListOfGeoJson(data);
      setIsLoading(false);
    }
    fetchPlace();
  }, [searchName]);

  return (
    <div className="App">
      <Form setSearchName={setSearchName} isLoading={isLoading} setIsLoading={setIsLoading}/>
      <LondonMap search={searchName} listOfGeoJson={listOfGeoJson}/>
      <Navigation 
        number={selectedNumber} 
        setNumber={setSelectedNumber}
        total={totalPlace}
        setTotal={setTotalPlace}
        />
    </div>
  );
}

export default App;
