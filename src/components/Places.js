/**
  * @description Import needed components
  */
import React, { Component } from 'react'
import { getInfo } from './wikipediaApi.js'

class Places extends Component {

    render(){
        return(
            <ol tabIndex="0" id="list-of-places">
                {this.props.markers.map((marker, i) => (
                    /**
                     * @description Display on the map information about the place whose name was clicked and close menu.
                     */                    
                    <li tabIndex="0" key={i} details="det" role="link" onClick={() => {
                        this.props.markerLocationsActive(i);
                        this.props.closeMenu();
                        getInfo(marker.title);
                    }}>{ marker.title } »</li>
                ))}
            </ol>
        )
    }
}

export default Places