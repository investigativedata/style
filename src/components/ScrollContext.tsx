import { PropsWithChildren, createContext, useEffect, useState } from "react";

export const ScrollContext = createContext<number>(0);

export default function ScrollContextProvider({ children }: PropsWithChildren) {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => setScrollY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider value={scrollY}>{children}</ScrollContext.Provider>
  );
}
