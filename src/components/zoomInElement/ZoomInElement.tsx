import { useGlobalContext } from "../../hooks/UseGlobalContext";
import "./ZoomInElement.scss";

interface ZoomInElementProps extends React.HTMLAttributes<HTMLElement> {
  imgSrc: string;
}

const ZoomInElement: React.FC<ZoomInElementProps> = (
  props: ZoomInElementProps
) => {
  const { imgSrc, children, ...htmlAttributes } = props;
  const { zoomIn } = useGlobalContext();

  htmlAttributes.className = htmlAttributes.className
    ? `zoom-in-element ${htmlAttributes.className}`
    : "zoom-in-element";

  const onClickMod = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (htmlAttributes.onClick) htmlAttributes.onClick(e);
    zoomIn.setCurrent(imgSrc);
  };

  return (
    <div {...htmlAttributes} onClick={onClickMod}>
      {children}
    </div>
  );
};

export default ZoomInElement;
