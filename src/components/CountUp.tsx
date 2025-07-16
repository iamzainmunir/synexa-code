"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

type CountUpProps = {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
};

const CountUpOnScroll: React.FC<CountUpProps> = ({
  to,
  suffix = "",
  duration = 2,
  className = "",
}) => {
  const [value, setValue] = useState<number>(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min(
          (currentTime - startTime) / (duration * 1000),
          1
        );
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setValue(Math.floor(easeOut * to));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={clsx(className, "")}>
      {value}
      {suffix}
    </span>
  );
};

export default CountUpOnScroll;
