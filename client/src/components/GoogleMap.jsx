import React from 'react'

function GoogleMap() {
    return (
        <GoogleMap 
            onLoad={map => {
                const bounds = new window.google.maps.LatLngBounds();
                map.fitBounds(bounds);
            }}
            onUnmount={map => {
                // do your stuff before map is unmounted
            }}
        />
    )
}

export default GoogleMap
