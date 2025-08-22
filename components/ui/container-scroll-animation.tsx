"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Using global scroll for better performance
  const { scrollYProgress } = useScroll();

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Much more dramatic and visible animations!
  const rotate = useTransform(scrollYProgress, [0, 1], [25, -150]); // More visible rotation
  const scale = useTransform(scrollYProgress, [0, 1], isMobile ? [0.7, 1.3] : [1.4, 0.7]); // Much more dramatic scaling
  const translate = useTransform(scrollYProgress, [0, 1], [0, -300]); // Much more visible movement
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 0]); // More visible Y rotation

  return (
    <div
      className="h-[50rem] flex items-start justify-center relative p-4"
      ref={containerRef}
    >
      <div
        className="py-2 w-full relative"
        style={{
          perspective: "1200px", // Increased for more dramatic effect
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} rotateY={rotateY} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="max-w-5xl mx-auto text-center mb-4"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  rotateY,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  rotateY: MotionValue<number>;
  scale: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        rotateY: rotateY,
        scale,
        transformStyle: "preserve-3d",
      }}
      className="max-w-5xl mx-auto h-[40rem] w-full border-4 border-[#8B7355] p-6 bg-[#8B7355] rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-[#F5F5DC] dark:bg-[#8B7355] p-4">
        {children}
      </div>
    </motion.div>
  );
};


