import React, { useState } from "react";

const GeoContext = React.createContext({});

function GeoProvider(props) {
  const [geoData, setGeoData] = useState({});

  return (
    <GeoContext.Provider value={{ geoData, setGeoData }}>
        {props.children}
    </GeoContext.Provider>
  );
}

export{ GeoContext,GeoProvider};
