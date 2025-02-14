import { useRef, useState, useEffect } from "react";

import { useRouter } from "next/navigation";
import Image from "next/image";

import { MarkerClusterer, Marker } from "@googlemaps/markerclusterer";
import { useMap, AdvancedMarker } from "@vis.gl/react-google-maps";

import { Tree } from "..";

import { Container } from "./styles";

type Props = {
  location: Tree[];
};

const Markers = ({ location }: Props) => {
  const map = useMap();
  const clusterer = useRef<MarkerClusterer | null>(null);

  // const [open, setOpen] = useState();
  const route = useRouter();

  const [markers, setMarkers] = useState<{ [key: string]: Marker }>({});

  useEffect(() => {
    if (!map) return;
    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({ map });
    }
  }, [map]);

  useEffect(() => {
    clusterer.current?.clearMarkers();
    clusterer.current?.addMarkers(Object.values(markers));
  }, [markers]);

  const setMarkerRef = (marker: Marker | null, key: string) => {
    if (marker && markers[key]) return;
    if (!marker && !markers[key]) return;

    setMarkers((prev) => {
      if (marker) {
        return { ...prev, [key]: marker };
      } else {
        const newMarkers = { ...prev };
        delete newMarkers[key];
        return newMarkers;
      }
    });
  };

  function handleSelect(selected: Tree) {
    map?.panTo({ lat: selected.lat, lng: selected.lng }); // Move suavemente até o marcador
    map?.setZoom(18); // Aproxima o mapa
  };

  function handleButton(item: string) {
    route.push(`/${item}`)
  };

  return (
    <>
      {location.map((point) => (
        <Container
          ref={marker => setMarkerRef(marker, point.key)}
          position={point}
          key={point.key}
          onClick={() => handleSelect(point)}
        >
          <button className="moving-item" onClick={e => {
            e.preventDefault();
            e.stopPropagation();
            handleButton(point.id);
          }}>
            Visualizar
          </button>
          <Image
            src={point.files[0]}
            width={100}
            height={150}
            alt={point.name}
            style={{ objectFit: 'cover', borderRadius: 6, zIndex: 1 }}
          />
          <span />
        </Container>
      ))}
    </>
  );
};

export default Markers;