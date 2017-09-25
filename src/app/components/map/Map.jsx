import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';
import MenuMap from './MenuMap'
export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.user=props.route.user.user;
        console.log(this.user);
    }

    render() {
        return (
            <div className="container map">
                <MenuMap className="menuMap" listUser={this.user}></MenuMap>
                <Map className="googleMap" google={this.props.google} zoom={14}></Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyB9i462e2_P2GcacWCo4mCgbXqTgS6xb6A")
})(MapContainer)