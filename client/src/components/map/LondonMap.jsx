import React, { useState } from 'react';
import { Map, TileLayer, GeoJSON, Popup } from 'react-leaflet'
import './LondonMap.css'

const LondonMap = (props) => {
    const [position, setPosition] = useState([51.505, -0.09]);
    const [zoom, setZoom] = useState(12);
    const { listOfGeoJson } = props;
    const accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
    const url = "https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=" + accessToken;
    const attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'

    // const changeMapFocus = (lat, lon, zoom) => {
    //     setPosition([lat, lon]);
    //     setZoom(zoom);
    // }

    return (
        <>
        <Map center={position} zoom={zoom} id='london-map'>
            <TileLayer 
                url={url}
                attribution={attribution}
            />
            {
                listOfGeoJson.length !== 0 && (
                    listOfGeoJson.map((place) => (
                        <>
                            <GeoJSON data={place}>
                                <Popup>{place.properties.name}</Popup>
                            </GeoJSON>
                        </>
                    ))
                )
            }
        </Map>
        </>
    )
}

export default LondonMap;
