import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useCustomization } from "./contexts/Customization";

const Chair = (props) => {

  const {material, legs, primarColor, secondColor} = useCustomization()

  const { nodes, materials } = useGLTF("../models/chair.gltf");

  const plasticTextureProps = useTexture({
    // map: "../textures/leather/Leather_008_Base Color.jpg",
    normalMap: "../textures/leather/Leather_008_Normal.jpg",
    roughnessMap: "../textures/leather/Leather_008_Roughness.jpg",
    aoMap: "../textures/leather/Leather_008_Ambient Occlusion.jpg",
  });

  const metalTextureProps = useTexture({
    // map: "../textures/fabric/Fabric_Knitted_006_basecolor.jpg",
    normalMap: "../textures/fabric/Fabric_Knitted_006_normal.jpg",
    roughnessMap: "../textures/fabric/Fabric_Knitted_006_roughness.jpg",
    aoMap: "../textures/fabric/Fabric_Knitted_006_ambientOcclusion.jpg",
  });


  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Chair.geometry}>
        <meshStandardMaterial {...material === 'plastic' ? plasticTextureProps : metalTextureProps} 
        color={primarColor.color}
        />
      </mesh>
      <mesh
        geometry={nodes.Cushion.geometry}
        material={materials.Cushion}
        position={[0, 0.06, 0.04]}
      >
         <meshStandardMaterial {...metalTextureProps} 
         color={secondColor.color}
         />
      </mesh>
      <mesh geometry={nodes.Legs1.geometry} material={materials.Legs} visible={legs === 1}/>
      <mesh
        geometry={nodes.Legs2.geometry}
        material={materials.Legs}
        visible={legs === 2}
      />
    </group>
  );
};

useGLTF.preload("../models/chair.gltf");
export default Chair;
