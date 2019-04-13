import React, {Component} from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={18}
        defaultCenter={{lat: 44.006840, lng: 20.892489}}>
        <Marker position={{lat: 44.006840, lng: 20.892489}}/>
    </GoogleMap>
));
export default MyMapComponent;