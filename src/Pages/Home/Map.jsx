import { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const position = [23.7855, 90.41347];
  const mapRef = useRef();
  return (
    <div>
      <h2 className="lg:text-5xl text-3xl mt-6 lg:mt-16  font-bold text-[#FA4612] text-center">
        Map
      </h2>
      <div className="w-full  mt-20 relative -z-10 lg:-z-0">
        <MapContainer
          center={position}
          zoom={13}
          ref={mapRef}
          scrollWheelZoom={false}
          className="h-[445px] overflow-hidden"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
