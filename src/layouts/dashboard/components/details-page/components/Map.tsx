import React, { useRef } from "react";
import {MapContainer, Pane, Polyline, Rectangle, SVGOverlay, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const SimpleMap = () => {
    const mapRef = useRef(null);
    const latitude = 23.5975;
    const longitude = 58.5401;

    const geometry =  [
        [
            58.709118000000046,
            23.218200000000024
        ],
        [
            58.709023000000059,
            23.21809200000007
        ],
        [
            58.70895500000006,
            23.218085000000031
        ],
        [
            58.708765000000028,
            23.21822700000007
        ],
        [
            58.708890000000054,
            23.21837000000005
        ],
        [
            58.709118000000046,
            23.218200000000024
        ]
    ]

    console.log(mapRef);

    const chooseYourLandOptions = { fillColor: 'blue' }
    const payYourLandOptions = { color: 'red' }
    const planYourLandOptions = { color: 'lime' }
    const futureCitiesOptions = { color: 'purple' }




    return (
        // Make sure you set the height and width of the map container otherwise the map won't show
        <MapContainer center={[latitude, longitude]} zoom={12} ref={mapRef} scrollWheelZoom={false} style={{ width: "100%", height: 400}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/*// @ts-ignore*/}
            <SVGOverlay attributes={{ stroke: 'red' }} bounds={[[
                58.71326700000003,
                23.220790000000022
            ],
                [
                    58.713073000000065,
                    23.220769000000075
                ],]}>
                <circle x="0" y="0" width="100%" height="100%" fill="blue" />
            </SVGOverlay>
            {/*<Polyline pathOptions={chooseYourLandOptions} positions={geometry} />*/}
            {/* Additional map layers or components can be added here */}
        </MapContainer>
    );
};

export default SimpleMap;