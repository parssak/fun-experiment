import { useEffect, useState } from "react";
import "./index.css";

const Ball = ({ duration }: { duration: number }) => {
  const [goRight, setGoRight] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!isTransitioning) {
      setGoRight(!goRight);
      setIsTransitioning(true);
    }
  }, [isTransitioning]);

  return (
    <div
      className="relative "
      // onMouseOver={() => {
      //   if (!isTransitioning) {
      //     setIsTransitioning(true);
      //   }
      //   setGoRight((p) => !p);
      // }}
      onTransitionEnd={() => {
        setIsTransitioning(false);
      }}
    >
      <div
        className={`
        w-9
        h-9
        rounded-full
        bg-sky-500
        transition-all
        pointer-events-none
        relative ${goRight ? "left-3/4 bg-rose-500" : "left-0"}`}
        style={{ transitionDuration: `${duration}ms` }}
      />
      <div
        className={`
        w-9
        h-9
        rounded-full
        bg-sky-500
        transition-all  
        absolute ${goRight ? "right-3/4 bg-rose-500" : "right-0"}`}
        style={{ transitionDuration: `${duration}ms` }}
      />
      <div
        className={`
        w-9
        h-9
        rounded-full
        bg-sky-500
        transition-all
        pointer-events-none
        relative ${goRight ? "left-3/4 bg-rose-500" : "left-0"}`}
        style={{ transitionDuration: `${duration - 500}ms` }}
      />
      <div
        className={`
        w-9
        h-9
        rounded-full
        bg-sky-500
        transition-all  
        absolute ${goRight ? "right-3/4 bg-rose-500" : "right-0"}`}
        style={{ transitionDuration: `${duration - 500}ms` }}
      />
    </div>
  );
};

function App() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="font-bold text-3xl">Starter Template</h1>
      <p>Vite, React, TypeScript, TailwindCSS 3</p>

      {Array(50)
        .fill(0)
        .map((_, i) => (
          <Ball key={i} duration={(i + 1) * 1000} />
        ))}
    </div>
  );
}

export default App;
