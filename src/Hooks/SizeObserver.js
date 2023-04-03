import React, { useEffect, useCallback, useState, useContext } from "react";

export const SizeContext = React.createContext({
  innerWidth: window.innerWidth,
  innerHeight: window.innerHeight,
});

export const useSizeObersver = () => {
  return useContext(SizeContext);
};
const SizeObserver = ({ children }) => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);

  const handleResize = useCallback(() => {
    setInnerWidth(window.innerWidth);
    setInnerHeight(window.innerHeight);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize, { passive: true });

    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <SizeContext.Provider value={{ innerWidth, innerHeight }}>
      {children}
    </SizeContext.Provider>
  );
};

export default SizeObserver;
