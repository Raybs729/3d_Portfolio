import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./spaceman/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={10} groundColor="black" />
      <pointLight intensity={3} position={[1, 0, 0]} />
      <spotLight
        position={[-20, -50, -10]}
        angle={0.5}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 6.75 : 10.75}
        position={isMobile ? [-13.5, -2.25, -20.5] : [0, -10.25, -1.5]}
        rotation={isMobile ? [0.3, 4, 0.09] : [0.3, 0.1, -0.2]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)"); //=added an listener for changes to screensize

    setIsMobile(mediaQuery.matches); //=needed to set starting value of isMobile variable

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches); //=define callback function to handle changes to media query
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);//=add the callback function as a listener for changes to the media query

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange); 
    }; //=remove listener when the component is unmounted
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [-10, -9, -20], fov: 90 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enableRotate={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
