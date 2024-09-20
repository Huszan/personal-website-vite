import "./Button.scss";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "clear" | undefined;
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { variant, children, ...htmlAttributes } = props;
  htmlAttributes.className = htmlAttributes.className
    ? `${htmlAttributes.className} custom-button`
    : "custom-button";
  htmlAttributes.className += ` ${variant ? variant : "clear"}`;

  return <button {...htmlAttributes}>{children}</button>;
};
