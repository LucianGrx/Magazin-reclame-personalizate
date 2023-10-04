import React, { useRef, useState, useEffect } from "react";
import { useGLTF, useTexture, Decal, PivotControls } from "@react-three/drei";
import { useCustomization } from "./contexts/Customization";
import { useFrame, useThree } from '@react-three/fiber';
import { useControls } from 'leva'
import * as THREE from 'three';

const Chair = (props) => {

  const {material, legs, primarColor, secondColor} = useCustomization()

  const { nodes, materials } = useGLTF("../models/model6.gltf");
  
  const [decalPos, setDecalPos] = useState([2, 0, 0]); // Poziția decalului
  const [decalRot, setDecalRot] = useState([0, 0, 0]); // Rotația decalului
  
  const decalImage = useTexture("../img/logo-inno.png");
  const { debug, image, scale } = useControls({
    debug: false,
    image: { image: '../img/logo-inno.png' }, 
    scale: { value: 1, min: 0, max: 10 }
  })
  

  const plasticTextureProps = useTexture({
    // map: "../textures/leather/Leather_008_Base Color.jpg",
    normalMap: "../textures/plastic/Plastic_003_normal.jpg",
    roughnessMap: "../textures/plastic/Plastic_003_roughness.jpg",
    aoMap: "../textures/plastic/Plastic_003_ambientOcclusion.jpg",
  });

  const metalTextureProps = useTexture({
    // map: "../textures/fabric/Fabric_Knitted_006_basecolor.jpg",
    normalMap: "../textures/leather/Leather_011_normal.jpg",
    roughnessMap: "../textures/leather/Leather_011_roughness.jpg",
    aoMap: "../textures/leather/Leather_011_ambientOcclusion.jpg",
  });

  const mesh = useRef();
  const mesh2 = useRef();
  useEffect(() => {
    if (mesh.current) {
      // Rotirea modelului cu 90 de grade în jurul axei Y
    //   mesh.current.rotation.x = 1.6;
    //   mesh.current.rotation.y = 3.1;
    //   mesh.current.rotation.z = 3.2; // π/2 radiani = 90 de grade
    }
  }, []);
  const { viewport } = useThree();

  return (
    <group {...props} dispose={null}>
      <group position={[1.5, 2.5, 1]}>
  <PivotControls
    scale={1}
    activeAxes={[true, true, false]}
    onDrag={(local) => {
      const position = new THREE.Vector3()
      const scale = new THREE.Vector3()
      const quaternion = new THREE.Quaternion()
      local.decompose(position, quaternion, scale)
      const rotation = new THREE.Euler().setFromQuaternion(quaternion)
      setDecalPos([position.x, position.y + 2.5, position.z + 0.3])
      setDecalRot([rotation.x, rotation.y, rotation.z])
    }}
  />
</group>
      <mesh geometry={nodes.Chair.geometry}
      scale={1.2}
      position={[0, 1.1, 0.04]}
      ref={mesh}>
        <meshStandardMaterial {...material === 'plastic' ? plasticTextureProps : metalTextureProps} 
        color={primarColor.color}
        />
         
      </mesh>
      <mesh
        geometry={nodes.Plane.geometry}
        material={materials.Cushion}
        ref={mesh2}
      >
         <meshStandardMaterial {...metalTextureProps} 
         color={secondColor.color}
         />
        <Decal debug={debug} position={decalPos} rotation={decalRot} scale={0.5 * scale} map={useTexture(image)} />
      </mesh>
    </group>
  );
};

useGLTF.preload("../models/model6.gltf");
export default Chair;
