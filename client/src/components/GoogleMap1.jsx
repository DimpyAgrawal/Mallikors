import React, { useState, useCallback, useEffect } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import img from '../assets/placeholder.png';

const containerStyle = {
  width: '100%',
  height: '639px'
};

const defaultCenter = {
  lat: 26.1664,
  lng: 91.7055
};

function GoogleMap1() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCeOKb-Q5-NEb5mbNntnFGP61r_-xCsO9Y"
  });

  const [map, setMap] = useState(null);
  const [center, setCenter] = useState(defaultCenter);
  const [latitude, setLatitude] = useState(defaultCenter.lat);
  const [longitude, setLongitude] = useState(defaultCenter.lng);
  const [marker, setMarker] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, [center]);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const handleSearch = () => {
    const newCenter = { lat: parseFloat(latitude), lng: parseFloat(longitude) };
    setCenter(newCenter);
    if (map) {
      map.panTo(newCenter);
      if (marker) {
        marker.setPosition(newCenter);
      } else {
        const newMarker = new window.google.maps.Marker({
          position: newCenter,
          map,
          icon: img,
          scaledSize: new window.google.maps.Size(1, 1)
        });
        setMarker(newMarker);
      }
    }
  };

  useEffect(() => {
    if (isLoaded && map) {
      const newMarker = new window.google.maps.Marker({
        position: center,
        map,
        icon: img,
        scaledSize: new window.google.maps.Size(10, 10)
      });
      setMarker(newMarker);
    }
  }, [isLoaded, map]);

  return (
    <>
      <div className="p-4 bg-gray-100  flex justify-center items-center space-x-2">
        <input
          type="text"
          placeholder="Latitude"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleSearch}
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={20}
          onLoad={onLoad}
          onUnmount={onUnmount}
        />
      ) : <></>}
    </>
  );
}

export default React.memo(GoogleMap1);
