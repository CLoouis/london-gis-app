import React, { useState, useEffect } from 'react';
import LondonMap from './components/map/LondonMap';
import Form from './components/form/Form';
import Navigation from './components/navigation/Navigation';
import { getPlaceByName } from './api/place';
import { getLandByName } from './api/land';

function App() {
  const [searchName, setSearchName] = useState();
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [totalPlace, setTotalPlace] = useState(0);
  const [totalLand, setTotalLand] = useState(0);
  const [listOfPlace, setListOfPlace] = useState([]);
  const [listOfLand, setListOfLand] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchPlace = async () => {
      try {
        const data = await getPlaceByName(searchName);
        setTotalPlace(data.length || 0);
        setListOfPlace(data);
        setIsLoading(false);
      } catch(err) {
        setIsLoading(false);
        setTotalPlace(0);
        setListOfPlace([]);
      }
    }

    const fetchLand = async () => {
      try {
        const data = await getLandByName(searchName);
        setTotalLand(data.length || 0);
        setListOfLand(data);
        setIsLoading(false);
      } catch(err) {
        setIsLoading(false);
        setTotalLand(0);
        setListOfLand([]);
      }
    }
    
    fetchPlace();
    fetchLand();
    setSelectedNumber(1);
  }, [searchName]);

  const [position, setPosition] = useState([51.505, -0.09]);
  const [zoom, setZoom] = useState(12);

  const changeMapFocus = (lat, long, zoom) => {
      setPosition([long, lat]);
      setZoom(zoom);
  }

  useEffect(() => {
    if (selectedNumber <= totalPlace) {
      changeMapFocus(listOfPlace[selectedNumber - 1].coordinates[0], listOfPlace[selectedNumber - 1].coordinates[1], 16)
    } else if (selectedNumber > totalPlace && selectedNumber <= totalLand + totalPlace) {
      changeMapFocus(parseFloat(listOfLand[selectedNumber - totalPlace - 1].properties.center_lat), parseFloat(listOfLand[selectedNumber - totalPlace - 1].properties.center_long), 16)
    }
  }, [selectedNumber])


  return (
    <div className="App">
      <Form setSearchName={setSearchName} isLoading={isLoading} setIsLoading={setIsLoading}/>
      <LondonMap position={position} zoom={zoom} listOfPlace={listOfPlace} listOfLand={listOfLand} />
      <Navigation 
        number={selectedNumber} 
        setNumber={setSelectedNumber}
        total={totalLand + totalPlace}
        />
    </div>
  );
}

export default App;
