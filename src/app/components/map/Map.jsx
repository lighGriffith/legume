import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';
import MenuMap from './MenuMap';
import $ from 'jquery';

export class MapContainer extends Component {

    constructor(props) {
        super(props);
        this.user={};
    }

    componentWillMount() {
        var me=this;
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/api/items",
            async:false,
            success: function (data) {
                me.user=data;
            },
            error:function(err){
                console.log(err);
            }
        });
    }

    render() {
        return (
            <div className="container map">
                <MenuMap className="menuMap" listUser={this.user}></MenuMap>
                <Map className="googleMap" google={this.props.google} zoom={14}
                     clickableIcons={false}></Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyB9i462e2_P2GcacWCo4mCgbXqTgS6xb6A")
})(MapContainer)