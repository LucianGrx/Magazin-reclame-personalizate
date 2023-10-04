import React, {Suspense} from "react";
import {
  Stage,
  OrbitControls,
} from "@react-three/drei";
import Model from "./Model";
import Model2 from './Model2';
import Model3 from './Model3'

const Experience = () => {

  return (
    // <PresentationControls
    //   speed={1.5}
    //   global
    //   zoom={0.7}
    //   polar={[-0.1, Math.PI / 4]}
    // >
      <Stage environment={"city"} intensity={0.6} contactShadow={0.5} >
      <Suspense fallback={null}>
         <Model3 position={[0, 0, 0]}/>
         {/* In functie de id-ul produsului vom modifica acest Chair cu un alt import respectiv */}
         <OrbitControls makeDefault />
        </Suspense>
      </Stage>
    // </PresentationControls>
    
  );
};

export default Experience;
