import React, { Component } from 'react';

export class MapContainer extends Component {
    render() {
        return (
            <div className="maps">
                <p className="main-blue-maps page-header main-blue"><span className = " bold">Get in touch</span> with Global dart</p>
                <iframe className="maps-iframe" width="100%" height="100%" frameborder="0"
                    src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJG9OI51gVrjsRHlXiBwIJbaA&key=AIzaSyD_orz9B9-WaJm7fmknQpdthqsjKRJRJPs"  allowfullscreen>
                </iframe>
            </div>
        )
    }
}

export default  MapContainer

