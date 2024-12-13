import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Loader } from "@react-three/drei";
import { Male } from "./Male";
import { Female } from "./Female";
import { PricePanel } from "./PricePanel";
import { ControlPanel } from "./ControlPanel";
import { TattooUpload } from "./TattooUpload";
import { Gizmo } from "./Gizmo";
export const ModelCanvas = () => {
  const [toggleModel, setToggleModel] = useState("male");
  const handleToggleModel = () => {
    setToggleModel((prevModel) => (prevModel === "male" ? "female" : "male"));
  };

  const [toggleDebug, setToggleDebug] = useState(false);
  const handleToggleDebug = () => {
    setToggleDebug((prev) => !prev);
  };

  const [togglePivot, setTogglePivot] = useState(true);
  const handleTogglePivot = () => {
    setTogglePivot((prev) => !prev);
  };

  const [uploadedImages, setUploadedImages] = useState({});
  const handleUploadedImages = (imageUrlWithBodyPart: any) => {
    setUploadedImages(imageUrlWithBodyPart);
  };
  
  return (
    <>
      <div className="z-10 md:justify-center fixed bottom-4 left-4 right-4 flex gap-3 flex-wrap justify-stretch">
        <PricePanel />
      </div>
      <div className="z-10 fixed top-4 right-4 flex gap-3 flex-wrap justify-end">
        <ControlPanel
          toggleModel={toggleModel}
          handleToggleModel={handleToggleModel}
          toggleDebug={toggleDebug}
          handleToggleDebug={handleToggleDebug}
          togglePivot={togglePivot}
          handleTogglePivot={handleTogglePivot}
        />
      </div>
      <div className="z-10 fixed top-1/2 left-4 transform -translate-y-1/2 flex flex-col gap-3 flex-wrap justify-center">
        <TattooUpload handleUploadedImages={handleUploadedImages} />
      </div>

      <Loader />
      <Suspense fallback={null}>
        <Canvas
          shadows
          orthographic
          camera={{ position: [0, 10, 100], zoom: 300 }}
          gl={{ preserveDrawingBuffer: true }}
          className="w-full h-full"
        >
          <Gizmo />
          <Environment preset="sunset" />
          <OrbitControls makeDefault />
          {toggleModel === "male" ? (
            <Male
              position={[0, -1, 1]}
              toggleDebug={toggleDebug}
              togglePivot={togglePivot}
              uploadedImages={uploadedImages}
            />
          ) : (
            <Female
              position={[0, -1, 1]}
              toggleDebug={toggleDebug}
              togglePivot={togglePivot}
              uploadedImages={uploadedImages}
            />
          )}
        </Canvas>
      </Suspense>
    </>
  );
};
