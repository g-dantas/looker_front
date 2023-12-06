import { Box } from "@mui/material";
import { useAnimate } from "framer-motion";
import React, { useEffect } from "react";

const Background = () => {
  const [topScope, animateTop] = useAnimate();
  const [bottomScope, animateBottom] = useAnimate();

  useEffect(() => {
    animateTop(
      topScope.current,
      {
        opacity: 1,
      },
      {
        delay: 1,
      }
    );

    animateBottom(
      bottomScope.current,
      {
        opacity: 1,
      },
      {
        delay: 0.5,
      }
    );
  }, [animateBottom, animateTop, bottomScope, topScope]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <div
        ref={topScope}
        className="topBackground"
        style={{
          opacity: 0,
        }}
      />
      <div ref={bottomScope} className="bottomBackground" />
      <div className="backgroundGradient" />
    </Box>
  );
};

export default Background;
