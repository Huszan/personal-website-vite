import { MutableRefObject, useEffect, useRef } from "react";
import "./Footer.scss";
import { SectionsHookData } from "../../hooks/UseSections";
import SocialLinks from "../socialLinks/SocialLinks";

export interface FooterProps {
  sectionsHook: SectionsHookData;
}

export function Footer(props: FooterProps) {
  const refFooter: MutableRefObject<HTMLElement | null> = useRef(null);

  const { sectionsHook } = props;
  const shRef = useRef(sectionsHook);

  useEffect(() => {
    if (!refFooter.current) return;
    shRef.current.setSectionElement("footer", refFooter.current);
  }, [refFooter]);

  return (
    <footer ref={refFooter}>
      <img
        className="logo-sm"
        src="/src/assets/images/mj_logo.png"
        alt="logo"
      />
      <SocialLinks />
      <div className="t-sub-2 cr-desc">
        © 2024 Designed and created by Mateusz Jacenty
      </div>
    </footer>
  );
}
