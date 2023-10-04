import React from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import "./Studio.css";
import Configurator from "./Configurator";
import { CustomizationProvider } from "./contexts/Customization";

const Studio = () => {
  return (
    <CustomizationProvider>
    <div className="flex">
    <div className="container">
      <Canvas camera={{ fov: 40 }}>
        <color attach="background" args={["#050505"]} />
        <fog attach="fog" args={["#050505", 10, 20]} />
        <Experience />
      </Canvas>
    </div>
    <Configurator />
    </div>
    </CustomizationProvider>
  );
};

export default Studio;
