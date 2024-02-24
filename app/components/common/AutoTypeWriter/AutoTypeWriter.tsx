'use client'
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const AutoTypeWriter = ({
  Text,
  typeSpeed,
  loop=false,
}: {
  Text: string[];
  typeSpeed?: number;
  loop?: boolean|number;
}) => {
  return (
      <Typewriter
        words={Text}
        loop={loop}
        cursor={true}
        cursorColor={"#000"}
        typeSpeed={typeSpeed}
      />
  );
};

export default AutoTypeWriter;
