import { useRive } from "@rive-app/react-canvas-lite";
import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/joy/Box";

export interface IAnimation {
  readonly width: number;
  readonly height: number;
  readonly src: string;
}

export default function Animation({
  src,
  width,
  height,
  children,
}: React.PropsWithChildren<IAnimation>) {
  const [ratio, setRatio] = useState<number>(0);
  const { RiveComponent } = useRive({
    src,
    autoplay: true,
  });
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const currentWidth = ref.current?.offsetWidth || 0;
    if (currentWidth > 0) {
      setRatio(currentWidth / width);
    }
  }, [ref.current]);
  return (
    <Box style={{ width: "100%", height: "auto", display: "block" }} ref={ref}>
      <Box
        style={{
          width: width * ratio,
          height: height * ratio,
          position: "relative",
        }}
      >
        <RiveComponent />
        {children && (
          <Box
            style={{
              width: width * ratio,
              height: height * ratio,
              position: "absolute",
              top: 0,
              left: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {children}
          </Box>
        )}
      </Box>
    </Box>
  );
}
