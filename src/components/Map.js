import React from "react";
import BackButton from "./BackButton";
import { MapStyled } from "./styles/Map.styled";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { FaCircle } from "react-icons/fa";

const center = [41.48053661371321, -71.31106840600809];
const locationMarker = new Icon({
  iconUrl: "./images/icon-location.svg",
  iconSize: [50, 75],
});

export default function Map() {
  return (
    <>
      <MapStyled>
        <div className="locate">
          <MapContainer
            center={center}
            zoom={15}
            style={{ width: "100vw", height: "90vh" }}
          >
            <TileLayer
              url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=mrILtE5hUPiIQN3qw4A0"
              attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            />
            <Marker
              position={center}
              icon={locationMarker}
              title=""
              color={"var(--gold)"}
            >
              <Tooltip
                direction={"center"}
                permanent
                className={"shape-tooltip"}
                bringToBack={true}
                // eslint-disable-next-line
                className={"popup"}
              >
                <FaCircle color={"var(--gold)"} />
              </Tooltip>
            </Marker>
          </MapContainer>
        </div>
        <BackButton zIndex={"1000"} />
      </MapStyled>
    </>
  );
}
