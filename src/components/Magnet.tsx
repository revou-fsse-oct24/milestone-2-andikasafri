import { useState, useEffect, useRef } from "react";

interface MagnetProps {
  /** Content to be wrapped with magnetic effect */
  children: React.ReactNode;
  /** Distance around the magnet where the mouse can activate it */
  padding?: number;
  /** Disables the magnet effect entirely */
  disabled?: boolean;
  /** Controls how strong the magnet pull is. Higher = less offset */
  magnetStrength?: number;
  /** Transition when the magnet is active (mouse in range) */
  activeTransition?: string;
  /** Transition when the magnet is inactive (mouse out of range) */
  inactiveTransition?: string;
  /** Optional class for the outer wrapper */
  wrapperClassName?: string;
  /** Optional class for the moving/inner element */
  innerClassName?: string;
}

/**
 * Creates a magnetic effect that attracts elements towards the mouse cursor
 *
 * @component
 * @example
 * ```tsx
 * <Magnet padding={50} magnetStrength={30}>
 *   <button>Hover me!</button>
 * </Magnet>
 * ```
 */
const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 100,
  disabled = false,
  magnetStrength = 2,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.5s ease-in-out",
  wrapperClassName = "",
  innerClassName = "",
}) => {
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const magnetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (disabled) {
      setPosition({ x: 0, y: 0 });
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!magnetRef.current) return;

      const { left, top, width, height } =
        magnetRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distX = Math.abs(centerX - e.clientX);
      const distY = Math.abs(centerY - e.clientY);

      if (distX < width / 2 + padding && distY < height / 2 + padding) {
        setIsActive(true);
        const offsetX = (e.clientX - centerX) / magnetStrength;
        const offsetY = (e.clientY - centerY) / magnetStrength;
        setPosition({ x: offsetX, y: offsetY });
      } else {
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [padding, disabled, magnetStrength]);

  return (
    <div
      ref={magnetRef}
      className={`relative inline-block ${wrapperClassName}`}
    >
      <div
        className={innerClassName}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: isActive ? activeTransition : inactiveTransition,
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Magnet;
