import "./Anchor.scss";

interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "text" | "icon" | undefined;
}

export const Anchor: React.FC<AnchorProps> = (props: AnchorProps) => {
  const { variant, children, ...htmlAttributes } = props;
  htmlAttributes.className = htmlAttributes.className ? `${htmlAttributes.className} custom-anchor` : 'custom-anchor';
  htmlAttributes.className += ` ${variant ? variant : "text"}`;

  return <a {...htmlAttributes}>{children}</a>;
};
