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

  useEffect(() => {
    if (sectionsHook.get["4"].element || !refFooter.current) return;
    sectionsHook.setSectionElement("4", refFooter);
  }, [refFooter]);

  return (
    <footer ref={refFooter}>
      <img className="logo-sm" src="/src/assets/mj_logo.png" alt="logo" />
      <SocialLinks />
      <div className="t-sub-2 cr-desc">
        © 2024 Designed and created by Mateusz Jacenty
      </div>
    </footer>
  );
}
