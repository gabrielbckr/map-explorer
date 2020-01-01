import React, {Component} from 'react';
import { Map, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';

class MapNavigator extends Component{
    constructor(props){
        super(props);
        this.state = {
            lat: 51.505,
            lng: -0.09,
            zoom: 13,
            markerPosition: [51.504, -0.088]
        }
    }

    render(){
        const position = this.state.markerPosition
        return (
          <Map center={position} zoom={this.state.zoom}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </Map>
    
        );
    }

}

export default MapNavigator;
