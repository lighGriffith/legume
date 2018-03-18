import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';
import MenuMap from './MenuMap';
import Modal from '../modal/Modal';
import $ from 'jquery';

export class MapContainer extends Component {

    constructor(props) {
        super(props);
        this.user={};
        this.state = {
            showCommande: false
        }
        this.selectedMarker={};
        this.hideModal = this.hideModal.bind(this);
        this.showModal = this.showModal.bind(this);
    }

    hideModal(){
        this.setState({showCommande: false});
    }

    showModal(marker){
        this.selectedMarker=marker;
        this.setState({showCommande: true})
    }

    componentWillMount() {
        var me=this;
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/api/items",
            async:false,
            success: function (data) {
                console.log(data);
                me.users=data;
            },
            error:function(err){
                console.log(err);
            }
        });
    }

    render() {
        return (
            <div className="container map">
                <MenuMap className="menuMap" showPopin={this.showModal} listUser={this.users}></MenuMap>
                {this.state.showCommande && <Modal unmountMe={this.hideModal}
                       isOpen={this.state.showCommande}
                       marker={this.selectedMarker.local}
                />}
                <Map className="googleMap" google={this.props.google} zoom={2}
                     clickableIcons={false}>
                    {this.users.map((marker, i) =>{
                        return(
                            <Marker
                                key={marker.local.name}
                                name={marker.local.name}
                                position={{lat: marker.local.lat, lng:marker.local.lng}}
                                onClick={this.showModal.bind(this,marker) }
                            />

                        )
                    })}
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyB9i462e2_P2GcacWCo4mCgbXqTgS6xb6A")
})(MapContainer)