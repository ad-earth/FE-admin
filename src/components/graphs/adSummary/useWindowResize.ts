import React, { useEffect, useState } from "react";

export function useWindowResize() {
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);
  const handelResize = () => setWindowSize(window.innerWidth);
  useEffect(() => {
    if (!windowSize) return;
    window.addEventListener("resize", handelResize);
    return () => window.removeEventListener("resize", handelResize);
  }, [windowSize]);

  return windowSize;
}
