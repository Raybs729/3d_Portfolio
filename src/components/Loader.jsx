import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 60,
          color: "#fff4f4",
          fontWeight: 700,
          marginTop: 130,
          fontFamily: "fantasy",
        }}
      
      >{progress.toFixed(2)}%</p>
    </Html>
  );
};

export default Loader;
