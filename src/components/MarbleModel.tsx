import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function MarbleModel() {
  const { scene } = useGLTF("/models/marble/marble_bust_01_4k.gltf");
  const modelRef = useRef<THREE.Group>(null);

  useEffect(() => {
    // 중심 맞추기
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    scene.position.sub(center); // 중심 정렬

    if (modelRef.current) {
      modelRef.current.position.set(1, 0, 0); // 원하는 위치로 조정
    }
  }, [scene]);

  useFrame((_, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.x += delta * 0.2; // x축 회전
      modelRef.current.rotation.z += delta * 0.1; // z축 회전
      modelRef.current.rotation.y += delta * 0.3; // y축 회전
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={4}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
    />
  );
}
