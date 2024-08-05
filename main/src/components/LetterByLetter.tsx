import { useEffect, useRef, useState } from "react";
import { Box, Text } from "@mantine/core";
import { handleScrollGlobal } from "./SnapScroll";

export const LetterByLetter = ({ text }: { text: string }) => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [blinkingUnderscore, setBlinkingUnderscore] = useState(true);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (index < text.length) {
      setTimeout(
        () => {
          setDisplayedText(displayedText + text[index]);
          setIndex(index + 1);
          if (index === text.length - 1) {
            setTimeout(() => {
              const wheelEvent = new WheelEvent("wheel", {
                deltaY: 1,
              }) as WheelEvent;

              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              handleScrollGlobal?.(wheelEvent);
            }, 1000);
          }
        },
        displayedText.length === 0 ? 1000 : 100
      );
    }
  }, [displayedText, index, text]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlinkingUnderscore(!blinkingUnderscore);
    }, 500);

    return () => clearInterval(interval);
  }, [blinkingUnderscore]);

  return (
    <Box
      ref={boxRef}
      style={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "start",
          justifyContent: "start",
        }}
      >
        <Text
          style={{
            fontSize: "calc(min(20vw, 30vh))",
          }}
        >
          {">"}
        </Text>
        <Text
          style={{
            fontSize: "calc(min(20vw, 30vh))",
          }}
        >
          {displayedText}
          {blinkingUnderscore ? "_" : "⠀"}
        </Text>
      </Box>
    </Box>
  );
};
