import { ReactNode } from "react";
import PwCapturePNG from "../assets/images/pw_capture.png";
import MDPNG from "../assets/images/manga-dot-capture-min.png";
import YLPNG from "../assets/images/yurpiland_capture.png";
import EMAPNG from "../assets/images/ema_capture.png";
import BGPNG from "../assets/images/boardgames_capture.png";
import ParallaxPNG from "../assets/images/parallax-capture-min.png";
import ParticlePNG from "../assets/images/particle-capture-min.png";

export interface Project {
  title: string;
  imageSrc: string | undefined;
  desc: string | ReactNode;
  siteLink: string | undefined;
  gitLink: string | undefined;
}

const projectsData: Project[] = [
  {
    title: "Old Personal Website",
    imageSrc: PwCapturePNG,
    desc: "Wanna visit old version of my personal website and see if I improved over years? You're certainly welcome to do so!",
    siteLink: "https://huszan.github.io/personal-website/",
    gitLink: "https://github.com/Huszan/personal-website",
  },
  {
    title: "Manga dot",
    imageSrc: MDPNG,
    desc: "A website where users can read manga online, with features to browse, filter, and rate titles. All data is stored in a MySQL database, managed by a custom backend that I developed",
    siteLink: "https://huszan.github.io/manga-dot/",
    gitLink: "https://github.com/Huszan/manga-dot",
  },
  {
    title: "Yurpiland",
    imageSrc: YLPNG,
    desc: "A web idle game where you recruit adventurers and send them on expeditions to earn shiny loot. Unfortunately, it's not finished yet, but I will complete it when I have some more free time",
    siteLink: "https://deluxe-duckanoo-024b44.netlify.app/map",
    gitLink: "https://github.com/Huszan/yurpiland",
  },
  {
    title: "EMA - Excel Merger Assistant",
    imageSrc: EMAPNG,
    desc: "It's a desktop office software created using React and Electron. It was developed to assist an undisclosed company in keeping track of their hardware and preventing mistakes when creating monthly reports",
    siteLink: undefined,
    gitLink: undefined,
  },
  {
    title: "Board Games",
    imageSrc: BGPNG,
    desc: "This website was created for my newer tabletop players who doesn't know what games are available on my shelf. Feel free to take a look yourself!",
    siteLink: "https://thriving-buttercream-82cf7b.netlify.app/",
    gitLink: undefined,
  },
  {
    title: "Paralax effect",
    imageSrc: ParallaxPNG,
    desc: "Custom paralax background effect on mouse move",
    siteLink: "https://huszan.github.io/moving-league-bg/",
    gitLink: "https://github.com/Huszan/moving-league-bg",
  },
  {
    title: "Particles",
    imageSrc: ParticlePNG,
    desc: "My take on creating web particles!",
    siteLink: "https://huszan.github.io/particle-effect/",
    gitLink: "https://github.com/Huszan/particle-effect",
  },
];

export { projectsData };
