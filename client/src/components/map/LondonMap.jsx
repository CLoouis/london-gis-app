import React from 'react';
import { Map, TileLayer, GeoJSON, Popup } from 'react-leaflet'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    map: {
        height: "80vh",
        width: "80vw",
        margin: "auto",
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        padding: "0.1em"
    },
    type: {
        textAlign: "center"
    },
    area: {
        textAlign: "center"
    },

}))

const LondonMap = (props) => {
    const classes = useStyles();
    const { listOfPlace, listOfLand, position, zoom } = props;
    const accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
    const url = "https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=" + accessToken;
    const attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'

    return (
        <>
        <Map center={position} zoom={zoom} className={classes.map}>
            <TileLayer 
                url={url}
                attribution={attribution}
            />
            {
                listOfPlace.length !== 0 && (
                    listOfPlace.map((place) => (
                        <GeoJSON data={place} key={"place" + place.properties.id}>
                            <Popup>
                                <div className={classes.title}>{place.properties.name}</div>
                                <div className={classes.type}>{(place.properties.type).toUpperCase()}</div>
                            </Popup>
                        </GeoJSON>
                    ))
                )
            }
            {
                listOfLand.length !== 0 && (
                    listOfLand.map((land) => (
                        <GeoJSON data={land} key={"land" + land.properties.id}>
                            <Popup>
                                <div className={classes.title}>{land.properties.name}</div>
                                <div className={classes.type}>{(land.properties.type).toUpperCase()}</div>
                                <div className={classes.area}>{(land.properties.area).toFixed(2)} sqm</div>
                            </Popup>
                        </GeoJSON>
                    ))
                )
            }
        </Map>
        </>
    )
}

export default LondonMap;
