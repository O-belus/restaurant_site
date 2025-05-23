'use client'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";


const DefaultIcon = L.icon({
    iconUrl: "/marker-icon.png",
    shadowUrl: "/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
})

L.Marker.prototype.options.icon = DefaultIcon

const LeafletMap = () => {
    const restaurantPosition: L.LatLngExpression = [18.994618587560016, 72.81157566857975];


  return (
    <MapContainer
    center={restaurantPosition}
    zoom={14}
    className="h-[400px] w-full rounded-lg"
    >
        <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <Marker position={restaurantPosition}>
            <Popup>
                <h3 className="font-bold">Sailor Restaurant</h3>
                <p>123 Main Street</p>
            </Popup>
        </Marker>

    </MapContainer>
  )
}

export default LeafletMap