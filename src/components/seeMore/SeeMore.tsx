import { useEffect, useRef, useState } from "react";
import "./SeeMore.scss";
import { isElementOverflown } from "../../utils/BaseUtils";

interface SeeMoreProps extends React.HTMLAttributes<HTMLElement> {
  lineLimit?: number;
}

const SeeMore: React.FC<SeeMoreProps> = (props: SeeMoreProps) => {
  const { lineLimit = 2, children, ...htmlAttributes } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const [isChildrenBigger, setIsChildrenBigger] = useState(false);
  const childrenWrappperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (childrenWrappperRef === null || childrenWrappperRef.current === null)
      return;

    const el = childrenWrappperRef.current;
    const isOverflown = isElementOverflown(el);
    setIsChildrenBigger(isOverflown);
  }, [childrenWrappperRef, lineLimit]);

  htmlAttributes.className = `see-more${
    htmlAttributes.className ? ` ${htmlAttributes.className}` : ""
  }`;

  useEffect(() => {
    if (childrenWrappperRef === null || childrenWrappperRef.current === null)
      return;

    const el = childrenWrappperRef.current;
    if (isExpanded) {
      el.style.webkitLineClamp = `unset`;
    } else {
      el.style.webkitLineClamp = `${lineLimit}`;
    }
  }, [isExpanded, lineLimit]);

  const handleSeeMore = () => {
    if (isChildrenBigger === false) return;
    setIsExpanded((prev) => !prev);
  };

  return (
    <div {...htmlAttributes}>
      <div ref={childrenWrappperRef} className="children-wrapper">
        {children}
      </div>
      {isChildrenBigger && (
        <button onClick={handleSeeMore} className="see-more-button">
          See {isExpanded ? "less" : "more"}
        </button>
      )}
    </div>
  );
};

export default SeeMore;
