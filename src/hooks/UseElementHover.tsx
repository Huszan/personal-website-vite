import { useEffect, useState } from "react";

interface ElementHoverProps {
  ref: React.MutableRefObject<HTMLElement | HTMLDivElement | null>;
}

interface ElementHoverData {
  isHovered: boolean;
}

const useElementHover = (props: ElementHoverProps) => {
  const { ref } = props;
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (element) {
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);

      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [ref]);

  return { isHovered } as ElementHoverData;
};

export { useElementHover };
