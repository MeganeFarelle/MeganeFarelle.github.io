import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Html } from "@react-three/drei";
import { useTranslation } from "react-i18next";

import CanvasLoader from "../Loader";

// ─── Place your media files in the public/ folder ───────────────────────────
//   public/screen-image.jpg   ← profile photo or any image
//   public/screen-video.mp4   ← short intro video
const SCREEN_IMAGE = "/screen-image.jpg";
const SCREEN_VIDEO = "/screen-video.mp4";
// ─────────────────────────────────────────────────────────────────────────────

const ScreenOverlay = ({ showVideo, onToggle }) => {
  const { t } = useTranslation();

  return (
    // Position this HTML element in 3D space at the monitor screen location.
    // Adjust x/y/z if the overlay doesn't align with your model.
    <Html
      position={[-0.45, -0.9, 0.65]}
      transform
      distanceFactor={1.2}
      style={{ pointerEvents: "none" }}
    >
      <div
        onClick={onToggle}
        title={t("about.screenHint")}
        style={{
          width: "215px",
          height: "135px",
          cursor: "pointer",
          borderRadius: "4px",
          overflow: "hidden",
          pointerEvents: "all",
          position: "relative",
          background: "#000",
        }}
      >
        {/* Image */}
        <img
          src={SCREEN_IMAGE}
          alt="screen"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: showVideo ? 0 : 1,
            transition: "opacity 0.5s ease",
          }}
        />

        {/* Video */}
        {showVideo && (
          <video
            src={SCREEN_VIDEO}
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: showVideo ? 1 : 0,
              transition: "opacity 0.5s ease",
            }}
          />
        )}

        {/* Click hint */}
        <div
          style={{
            position: "absolute",
            bottom: 4,
            right: 6,
            fontSize: "8px",
            color: "rgba(255,255,255,0.5)",
            fontFamily: "sans-serif",
            userSelect: "none",
          }}
        >
          {showVideo ? "▶ img" : "▶ vid"}
        </div>
      </div>
    </Html>
  );
};

const Computers = ({ isMobile, showVideo, onToggle }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
      <ScreenOverlay showVideo={showVideo} onToggle={onToggle} />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers
          isMobile={isMobile}
          showVideo={showVideo}
          onToggle={() => setShowVideo((v) => !v)}
        />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
