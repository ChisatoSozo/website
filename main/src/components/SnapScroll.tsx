import React, {
  useCallback,
  useMemo,
  useState,
  useRef,
  useEffect,
} from "react";
import { Box } from "@mantine/core";

export let handleScrollGlobal:
  | ((event: React.WheelEvent<HTMLDivElement>) => void)
  | null = null;

export const SnapScroll = ({ children }: { children: React.ReactNode[] }) => {
  const [offsetY, setOffsetY] = useState(0);
  const [animating, setAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastWheelTime = useRef(0);

  const refs = useMemo(
    () =>
      Array.from({ length: children.length }).map(() =>
        React.createRef<HTMLDivElement>()
      ),
    [children.length]
  );

  const animateAll = useCallback(
    (direction: "up" | "down") => {
      let animationOut: Animation | undefined = undefined;
      for (let i = 0; i < refs.length; i++) {
        const ref = refs[i];
        const element = ref.current;
        const animation = element?.animate(
          [
            { transform: `translateY(${offsetY}px)` },
            {
              transform: `translateY(${
                offsetY + (direction === "up" ? -1 : 1) * window.innerHeight
              }px)`,
            },
          ],
          {
            duration: 500,
            easing: "ease",
            fill: "forwards",
            iterations: 1,
          }
        );
        animationOut = animation;
      }
      return animationOut;
    },
    [offsetY, refs]
  );

  const handleScroll = useCallback(
    (event: React.WheelEvent<HTMLDivElement>) => {
      const thisTime = new Date().getTime();
      //debounce
      const diff = thisTime - lastWheelTime.current;
      lastWheelTime.current = thisTime;
      console.log(diff);
      //two frames
      if (diff < 40) return;
      if (animating) return;

      const currentSection =
        refs[Math.abs(offsetY / window.innerHeight)].current;
      if (!currentSection) return;

      const { scrollTop, scrollHeight, clientHeight } = currentSection;
      const isAtTop = scrollTop === 0;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;

      if (event.deltaY > 0 && isAtBottom) {
        if (offsetY === -window.innerHeight * (children.length - 1)) return;
        setAnimating(true);
        const anim = animateAll("up");
        anim!.onfinish = () => {
          setAnimating(false);
          setOffsetY(offsetY - window.innerHeight);
        };
      } else if (event.deltaY < 0 && isAtTop) {
        if (offsetY === 0) return;
        setAnimating(true);
        const anim = animateAll("down");
        anim!.onfinish = () => {
          setAnimating(false);
          setOffsetY(offsetY + window.innerHeight);
        };
      }
    },
    [animateAll, animating, children.length, offsetY, refs]
  );

  //this is a hack cause I don't wanna set up a whole context for this website
  handleScrollGlobal = handleScroll;

  useEffect(() => {
    const handleResize = () => {
      setOffsetY(
        -window.innerHeight * Math.round(Math.abs(offsetY / window.innerHeight))
      );
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [offsetY]);

  return (
    <Box
      ref={containerRef}
      h="100dvh"
      w="100vw"
      style={{ overflow: "hidden" }}
      onWheel={handleScroll}
    >
      {children.map((child, index) => (
        <Box
          key={index}
          id={`section${index + 1}`}
          p="md"
          style={{
            height: "100dvh",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "start",
            overflowX: "hidden",
            transform: `translateY(${offsetY}px)`,
            transition: animating ? "none" : "transform 0.5s ease",
          }}
          ref={refs[index]}
        >
          {child}
        </Box>
      ))}
    </Box>
  );
};
