
import { useState, useEffect } from "react";
import GlobalStyles from '@mui/joy/GlobalStyles';


function getKeyframesWithColors(arrayOfColors: string[]) {
  const keyframes: any = {};
  const totalColors = arrayOfColors.length;
  const percentageIncrement = totalColors > 1 ? 100 / (totalColors - 1) : 0;
  
  for (let i = 0; i < totalColors; i++) {
    const percentage = `${percentageIncrement * i}%`;
    keyframes[percentage] = { backgroundColor: arrayOfColors[i] };
  }
  
  return keyframes;
}

export function BackgroundsStyles({
  children,
}: React.PropsWithChildren) {
  const [styles, setStyles] = useState<any>(null);

  useEffect(() => {
    const backgrounds : string[] = [];
    document.querySelectorAll('[data-color]').forEach((element) => {
      const color = element.getAttribute('data-color');
      if (color) {
        backgrounds.push(color);
      }
    });
    
    const keyframes = getKeyframesWithColors(backgrounds);
    setStyles({
      body: {
        animation: 'colorChange auto linear',
        animationTimeline: 'scroll(nearest)',
      },
      '@keyframes colorChange': keyframes,
    });

  }, []);

  return styles !== null ? (
    <GlobalStyles styles={styles} />
  ) : null;
}
