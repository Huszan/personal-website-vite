import { ReactNode } from "react";

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
    imageSrc: "./src/assets/PW_capture.PNG",
    desc: "Wanna visit old version of my personal website and see if I improved over years? You're certainly welcome to do so!",
    siteLink: "https://huszan.github.io/personal-website/",
    gitLink: "https://github.com/Huszan/personal-website",
  },
  {
    title: "Manga dot",
    imageSrc: "./src/assets/manga-dot-capture-min.PNG",
    desc: "A website where users can read manga online, with features to browse, filter, and rate titles. All data is stored in a MySQL database, managed by a custom backend that I developed",
    siteLink: "https://huszan.github.io/manga-dot/",
    gitLink: "https://github.com/Huszan/manga-dot",
  },
  {
    title: "Yurpiland",
    imageSrc: "./src/assets/yurpiland_capture.PNG",
    desc: "A web idle game where you recruit adventurers and send them on expeditions to earn shiny loot. Unfortunately, it's not finished yet, but I will complete it when I have some more free time",
    siteLink: "https://deluxe-duckanoo-024b44.netlify.app/map",
    gitLink: "https://github.com/Huszan/yurpiland",
  },
  {
    title: "EMA - Excel Merger Assistant",
    imageSrc: "./src/assets/EMA_capture.PNG",
    desc: "It's a desktop office software created using React and Electron. It was developed to assist an undisclosed company in keeping track of their hardware and preventing mistakes when creating monthly reports",
    siteLink: undefined,
    gitLink: undefined,
  },
  {
    title: "Board Games",
    imageSrc: "./src/assets/boardgames_capture.PNG",
    desc: "This website was created for my newer tabletop players who doesn't know what games are available on my shelf. Feel free to take a look yourself!",
    siteLink: "https://thriving-buttercream-82cf7b.netlify.app/",
    gitLink: undefined,
  },
  {
    title: "Paralax effect",
    imageSrc: "./src/assets/parallax-capture-min.PNG",
    desc: "Custom paralax background effect on mouse move",
    siteLink: "https://huszan.github.io/moving-league-bg/",
    gitLink: "https://github.com/Huszan/moving-league-bg",
  },
  {
    title: "Particles",
    imageSrc: "./src/assets/particle-capture-min.PNG",
    desc: "My take on creating web particles!",
    siteLink: "https://huszan.github.io/particle-effect/",
    gitLink: "https://github.com/Huszan/particle-effect",
  },
];

export { projectsData };
