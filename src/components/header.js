import * as THREE from "three";
import React from "react";
import { ReactComponent as Logo } from "../images/logo2.svg";
import { Canvas } from "@react-three/fiber";
import Waves from "./shader/waves";

// onCreated={({ gl }) => {
//   gl.setClearColor(new THREE.Color('#1D2227'))
// }}

export default function Header() {
  return (
    <div className="relative sm:block h-60">
      <Canvas camera={{ fov: 30 }}>
        <Waves />
      </Canvas>
      <Logo className="absolute top-3" />
    </div>
  );
}
