import clsx from "clsx";
import React from "react";
import { unbounded } from "../../public/fonts/font";

const Heading = ({
  simpleWord,
  highlightedWord,
}: {
  simpleWord: string;
  highlightedWord: string;
}) => {
  return (
    <h2
      className={clsx(
        "text-3xl font-semibold text-balance my-10 sm:text-4xl lg:text-5xl ",
        unbounded.className
      )}
    >
      {simpleWord}

      <span className="text-primary">&nbsp;{highlightedWord}</span>
    </h2>
  );
};

export default Heading;
