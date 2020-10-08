import React, { useState } from 'react';
import { Map, TileLayer, GeoJSON, Popup} from 'react-leaflet'
import './LondonMap.css'

const LondonMap = () => {
    const [position, setPosition] = useState([51.505, -0.09]);
    const [zoom, setZoom] = useState(12);
    const accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
    const url = "https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=" + accessToken;
    const attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
    var military1 = {
        "type": "MultiPolygon",
        "crs": {
            "type": "name",
            "properties": {
                "name": "EPSG:4236"
            }
        },
        "coordinates": [
        [
            [
                [
                -0.3529153,
                51.4556126
                ],
                [
                -0.3529141,
                51.4558495
                ],
                [
                -0.3526193,
                51.4562892
                ],
                [
                -0.35264,
                51.4568213
                ],
                [
                -0.3525458,
                51.4568543
                ],
                [
                -0.3512468,
                51.4567669
                ],
                [
                -0.3492915,
                51.4567817
                ],
                [
                -0.3481236,
                51.4567627
                ],
                [
                -0.3477726,
                51.4563159
                ],
                [
                -0.3476293,
                51.4560318
                ],
                [
                -0.3472651,
                51.4559257
                ],
                [
                -0.3470285,
                51.4557778
                ],
                [
                -0.3468998,
                51.4538256
                ],
                [
                -0.3476738,
                51.453798
                ],
                [
                -0.3491509,
                51.4539206
                ],
                [
                -0.350124,
                51.4546296
                ],
                [
                -0.3511608,
                51.4547787
                ],
                [
                -0.3517572,
                51.4554206
                ],
                [
                -0.3529153,
                51.4556126
                ]
                ]
            ]
        ],
        "properties": {
            "name": "Royal Military School of Music",
            "type": "military",
            "id": 201
        }
    };

    const changeMapFocus = (lat, lon, zoom) => {
        setPosition([lat, lon]);
        setZoom(zoom);
    }

    return (
        <>
        <Map center={position} zoom={zoom} id='london-map'>
            <TileLayer 
                url={url}
                attribution={attribution}
            />
            <GeoJSON data={military1}>
                <Popup>
                    {military1.properties.name}
                </Popup>
            </GeoJSON>
        </Map>
        <button onClick={() => changeMapFocus(51.52, -0.12, 16)}>Click Me</button>
        </>
    )
}

export default LondonMap;