import React, { useEffect, useRef } from "react";

const LottieAnimation = ({ animationData }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.4/lottie.min.js";
    script.async = true;
    script.onload = () => {
      const anim = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
      return () => anim.destroy(); // Cleanup animation on component unmount
    };

    document.body.appendChild(script);

    return () => document.body.removeChild(script); // Cleanup script on component unmount
  }, [animationData]);

  return <div ref={containerRef} />;
};

export default LottieAnimation;
