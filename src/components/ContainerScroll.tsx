import React, { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { cn } from "../lib/utils";

interface ContainerScrollProps {
  /** Title component to be displayed at the top */
  titleComponent: string | React.ReactNode;
  /** Content to be displayed in the scrollable container */
  children: React.ReactNode;
  /** Optional className for styling */
  className?: string;
}

/**
 * A container component with scroll-based animations
 * Uses Framer Motion for smooth animations and transforms
 * 
 * @component
 * @example
 * ```tsx
 * <ContainerScroll
 *   titleComponent={<h1>Title</h1>}
 *   className="custom-class"
 * >
 *   <div>Content</div>
 * </ContainerScroll>
 * ```
 */
export const ContainerScroll: React.FC<ContainerScrollProps> = ({
  titleComponent,
  children,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scaleDimensions = () => isMobile ? [0.7, 0.9] : [1.05, 1];

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20",
        className
      )}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{ perspective: "1000px" }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

interface HeaderProps {
  translate: MotionValue<number>;
  titleComponent: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ translate, titleComponent }) => (
  <motion.div
    style={{ translateY: translate }}
    className="div max-w-5xl mx-auto text-center"
  >
    {titleComponent}
  </motion.div>
);

interface CardProps {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ rotate, scale, children }) => (
  <motion.div
    style={{
      rotateX: rotate,
      scale,
      boxShadow:
        "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
    }}
    className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl"
  >
    <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4">
      {children}
    </div>
  </motion.div>
);