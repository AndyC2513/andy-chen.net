import { useGLTF } from "@react-three/drei";
import skyScene from "../assets/3d/sky.glb";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { a } from "@react-spring/three";

const Sky = ({ isRotating, ...props }) => {
  const { nodes, materials } = useGLTF(skyScene);
  const skyRef = useRef();

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.1 * delta;
    } else {
      skyRef.current.rotation.y += 0.02 * delta;
    }
  });

  return (
    <a.group ref={skyRef} {...props}>
      <group scale={0.01}>
        <mesh
          geometry={nodes.Sphere__0.geometry}
          material={materials["Scene_-_Root"]}
          scale={50000}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -8, 0]}
        />
      </group>
    </a.group>
  );
};

useGLTF.preload("/sky.glb");

export default Sky;
