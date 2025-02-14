"use client"

import { useEffect, useState } from 'react';
import { Map } from '@vis.gl/react-google-maps';

import { Header } from '@/common';

import Markers from './_markers';

import { Container } from "./styles";

export type Tree = {
  files: string[];
  key: string;
  name: string;
  lat: number;
  lng: number;
};

export type LocationProps = {
  location: Tree[];
};

export default function Maps({ location }: LocationProps) {
  const [target, setTarget] = useState<{ lat: number, lng: number } | null>(null);

  const formatted: Tree[] = location.map((row, key) => ({ ...row, key: key.toString() }));

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((loc) =>
      setTarget({ lat: loc.coords.latitude, lng: loc.coords.longitude })
    );
  }, []);

  return (
    <>
      <Container>
        <Header />
        {target && (
          <Map
            defaultZoom={17}
            fullscreenControl={false}
            mapId={process.env.NEXT_PUBLIC_MAP_ID}
            // center={{ lat: target.lat, lng: target.lng }}
            defaultCenter={{ lat: target.lat, lng: target.lng }}
            gestureHandling="greedy"
            disableDefaultUI={false}
          >
            <Markers location={formatted} />
          </Map>
        )}
      </Container>

      {/* <Modal open={!loc}>
        Ative sua localização
      </Modal> */}
    </>
  )
};
