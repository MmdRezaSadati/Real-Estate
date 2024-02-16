"use client";
import React from "react";

import Map, { NavigationControl } from "react-map-gl/maplibre";
import maplibregl from "maplibre-gl";
import Pin from "./pin";
import { Marker } from "react-map-gl";
const MapComponent = ({ estate }: any) => {
  return (
    <Map
      mapLib={maplibregl}
      initialViewState={{
        longitude: estate?.longitude ? estate.longitude : 0,
        latitude: estate?.latitude ? estate.latitude : 0,
        // longitude: 53.1144672,
        // latitude: 36.55695,
        zoom: 14,
      }}
      style={{ width: "100%", height: "350px" }}
      mapStyle="https://api.maptiler.com/maps/streets/style.json?key=1P0n5LEqgAAHdzo1nE6P"
    >
      <Marker
        key={`marker`}
        longitude={estate?.longitude ? estate.longitude : 0}
        latitude={estate?.latitude ? estate.latitude : 0}
        anchor="bottom"
      >
        <Pin />
      </Marker>
      <NavigationControl position="top-left" />
    </Map>
  );
};

export default MapComponent;
