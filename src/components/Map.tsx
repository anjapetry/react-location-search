import "leaflet/dist/leaflet.css";
import type { Place } from "../api/Place";
import { useState, useEffect } from "react";
import type { Map as LeafletMap } from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

interface MapProps {
    place: Place | null;
}
const Map = ({ place }: MapProps) => {
    return <div>Map</div>;
};

export default Map;
