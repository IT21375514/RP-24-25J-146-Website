"use client";

import { useRef, useEffect } from "react";
import Lottie from "lottie-react";

const AnimationLottie = ({
  animationPath,
  width = "95%",
  speed = 1    // default to normal speed
}) => {
  const lottieRef = useRef(null);

  useEffect(() => {
    if (lottieRef.current) {
      // set the playback speed on mount or when `speed` changes
      lottieRef.current.setSpeed(speed);
    }
  }, [speed]);

  return (
    <Lottie
      animationData={animationPath}
      loop
      autoplay
      style={{ width }}
      lottieRef={lottieRef}
    />
  );
};

export default AnimationLottie;
