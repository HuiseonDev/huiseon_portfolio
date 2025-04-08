import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import LemonModel from "@components/LemonModel";
import MarbleModel from "@components/MarbleModel";
import fontFamilies from "@styles/FontFamilies";
import GlobalStyles from "@styles/GlobalStyles";
import { Global } from "@emotion/react";

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
        <h1
          style={{
            fontFamily: fontFamilies.playfair,
            fontStyle: "Italic",
            fontWeight: 400,
            fontSize: "2rem",
            color: "lightGray",
            pointerEvents: "none",

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
            <LemonModel />
            <MarbleModel />
            <OrbitControls enableZoom={false} />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}

export default App;
