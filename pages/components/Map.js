import { useEffect } from "react";
import React from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWptb3JyaXNvbjEwIiwiYSI6ImNrdnIxY2RvcTRucDUydm55bml4b2VqdGgifQ.nTLAwuRQ9JcdqHPQ7E7tKg";

const map = (props) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [-99.29011, 39.39172],
      zoom: 3,
    });

    if (props.pickupCoordinates) {
        addToMap(map, props.pickupCoordinates);
    }
    if (props.dropoffCoordinates) {
        addToMap(map, props.dropoffCoordinates);
    }

    if (props.pickupCoordinates && props.dropoffCoordinates) {
        map.fitBounds([
            props.dropoffCoordinates,
            props.pickupCoordinates
        ], {
            padding: 60
        });
        // addRouteToMap(map, props.pickupCoordinates, props.dropoffCoordinates);
    }


  }, [props.pickupCoordinates, props.dropoffCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker()
      .setLngLat(coordinates)
      .addTo(map);
  };

  return <Wrapper id="map">map</Wrapper>;
};

export default map;

const Wrapper = tw.div`
    flex-1
    h-1/2
    `;
