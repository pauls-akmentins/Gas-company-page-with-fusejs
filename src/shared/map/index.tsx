import { useMemo } from "react";
import classNames from "classnames";

import styles from "./styles/Map.module.scss";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { copies } from "../../copies/copies";

const GOOGLE_API_KEY = "AIzaSyBrGlYNsMQVwP2ckUXA1nQUkOjt74D33yY";

const Map: React.FC<{ longitude: number; latitude: number }> = ({
  longitude,
  latitude,
}) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_API_KEY,
  });

  const mapLocation = useMemo(
    () => ({ lat: latitude, lng: longitude }),
    [latitude, longitude]
  );

  return (
    <div className={classNames(styles.mapContainer)}>
      {!isLoaded ? (
        copies.mapLoading
      ) : (
        <GoogleMap zoom={10} center={mapLocation}>
          <MarkerF position={mapLocation} />
        </GoogleMap>
      )}
    </div>
  );
};

export default Map;
