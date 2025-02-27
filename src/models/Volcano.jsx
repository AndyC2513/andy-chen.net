/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Animateria (https://sketchfab.com/Animateria)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/volcano-island-lowpoly-4a6591dc9fee40d8bfda8350683af9af
Title: Volcano Island Lowpoly
*/

import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";

import volcanoScene from "../assets/3d/volcano.glb";

// The Volcano component is a simple component that displays the volcano model.
const Volcano = ({
  position,
  scale,
  rotation,
  isRotating,
  setIsRotating,
  setCurrentStage,
  userViewing,
}) => {
  const islandRef = useRef();
  const defaultRotation = [-1.4, 0, 1];

  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(volcanoScene);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (e) => {
    // Only does what this function do
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    // Get what type of click is used (mobile or desktop)
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;

    // Updates position
    lastX.current = clientX;
  };

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (isRotating) {
      // Get what type of click is used (mobile or desktop)
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;

      // Updates position
      const deltas = (clientX - lastX.current) / viewport.width;

      islandRef.current.rotation.z += deltas * Math.PI * 0.01;
      lastX.current = clientX;
      rotationSpeed.current = deltas * 0.01 * Math.PI;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);
      islandRef.current.rotation.z += 0.1 * Math.PI;
    } else if (e.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);
      islandRef.current.rotation.z -= 0.1 * Math.PI;
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  // Touch events for mobile devices
  const handleTouchStart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  };

  const handleTouchEnd = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };

  const handleTouchMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;

      islandRef.current.rotation.z += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  // Update the rotation of the island
  useFrame(() => {
    // If not rotating, apply damping to the rotation speed
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;
      // If the rotation speed is very small, set it to zero
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      islandRef.current.rotation.z += rotationSpeed.current;
    } else {
      // When rotating, determine the current stage based on island's orientation
      const rotation = islandRef.current.rotation.z;

      /**
       * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
       * The goal is to ensure that the rotation value remains within a specific range to
       * prevent potential issues with very large or negative rotation values.
       *  Here's a step-by-step explanation of what this code does:
       *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
       *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
       *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
       *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
       *     This is done to ensure that the value remains positive and within the range of
       *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
       *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
       *     modulo operation to the value obtained in step 2. This step guarantees that the value
       *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
       *     circle in radians.
       */
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 6 && normalizedRotation <= 6.4:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(1);
          break;
        case normalizedRotation >= 2 && normalizedRotation <= 2.4:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(3);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });

  useEffect(() => {
    const canvas = gl.domElement;

    const resetRotation = () => {
      if (islandRef.current) {
        islandRef.current.rotation.set(...defaultRotation);
      }
    };

    if (userViewing) {
      resetRotation();
      setIsRotating(false);
    }

    if (!userViewing) {
      canvas.addEventListener("pointerdown", handlePointerDown);
      canvas.addEventListener("pointerup", handlePointerUp);
      canvas.addEventListener("pointermove", handlePointerMove);
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("keyup", handleKeyUp);
      canvas.addEventListener("touchstart", handleTouchStart);
      canvas.addEventListener("touchend", handleTouchEnd);
      canvas.addEventListener("touchmove", handleTouchMove);
    }

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchend", handleTouchEnd);
      canvas.removeEventListener("touchmove", handleTouchMove);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove, userViewing]);

  return (
    <a.group
      ref={islandRef}
      position={position}
      scale={scale}
      rotation={rotation}
    >
      <mesh
        geometry={nodes.Clouds_Clouds_0.geometry}
        material={materials.Clouds}
      />
      <mesh
        geometry={nodes.hammock_hammock_0.geometry}
        material={materials.hammock}
      />
      <mesh
        geometry={nodes.Tequila_Bottle_Tequila_Bottle_0.geometry}
        material={materials.Tequila_Bottle}
      />
      <mesh
        geometry={nodes.skeleton_skeleton_0.geometry}
        material={materials.skeleton}
      />
      <mesh
        geometry={nodes.Pyramid_Pyramid_0.geometry}
        material={materials.Pyramid}
      />
      <mesh
        geometry={nodes.Island_Grass_Island_Grass_0.geometry}
        material={materials.Island_Grass}
      />
      <mesh
        geometry={nodes.shrubbery_shrubbery_0.geometry}
        material={materials.shrubbery}
      />
      <mesh
        geometry={nodes.Lava_bubble_Lava_bubble_0.geometry}
        material={materials.Lava_bubble}
      />
      <mesh
        geometry={nodes.Volcanic_lava_Volcanic_lava_0.geometry}
        material={materials.Volcanic_lava}
      />
      <mesh
        geometry={nodes.Palm_tree_2_Palm_tree_2_0.geometry}
        material={materials.Palm_tree_2}
      />
      <mesh
        geometry={nodes.Palm_tree_1_Palm_tree_1_0.geometry}
        material={materials.Palm_tree_1}
      />
      <mesh
        geometry={nodes.Volacano_Sand_Volacano_Sand_0.geometry}
        material={materials.Volacano_Sand}
      />
      <mesh
        geometry={nodes.Ocean_Ocean_0.geometry}
        material={materials.Ocean}
      />
      <mesh
        geometry={nodes.Volcano_Grass_Volcano_Grass_0.geometry}
        material={materials.Volcano_Grass}
      />
      <mesh
        geometry={nodes.Volcano_Base_Volcano_Base_0.geometry}
        material={materials.Volcano_Base}
      />
    </a.group>
  );
};

useGLTF.preload("/volcano_island_lowpoly.glb");

export default Volcano;
