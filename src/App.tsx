import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GlassModel from "@components/GlassModel";
import { Suspense } from "react";

function App() {
  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <h1
        style={{
          fontSize: "1.5rem",
          color: "lightGray",
          pointerEvents: "none",
          fontWeight: "500",
          zIndex: 0,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        background text background text background text
        <br />
        background text background text background text
        <br />
        background text background text background text
        <br />
        background text background text background text
        <br />
        background text background text background text
        <br />
        background text background text background text
        <br />
        background text background text background text
        <br />
        background text background text background text
        <br />
        background text background text background text
        <br />
        background text background text background text
        <br />
        background text background text background text
        <br />
        background text background text background text
        <br />
        background text background text background text
        <br />
        background text background text background text
        <br />
      </h1>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{
          width: "100vw",
          height: "100vh",
          zIndex: 10,
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={2.6} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <directionalLight position={[5, 5, 5]} />
          <GlassModel />

          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
