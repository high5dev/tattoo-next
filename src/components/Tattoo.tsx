import { useEffect } from "react";
import { Decal } from "@react-three/drei";
import * as THREE from 'three';

export const Tattoo = ({
  position = [0, 0, 0],
  rotation = [0, Math.PI / 2, 0],
  scale = [1, 1, 1],
  tattoo,
  debugMode = false
}: {
  position?: [number, number, number],
  rotation?: [number, number, number],
  scale?: [number, number, number],
  tattoo: THREE.Texture,
  debugMode?: boolean
}) => {
  return (
    <Decal
      position={position}
      rotation={rotation}
      scale={scale}
      map={tattoo}
      debug={debugMode}
      material-depthTest={true}
    />
  );
}

