import { convertRemToPxNum } from "./BaseUtils";

export const calcElementsPerPage = (
  elementWidth: number,
  buttonSize: number
) => {
  const windowWidth = window.innerWidth - convertRemToPxNum(buttonSize * 2);
  return Math.max(Math.floor(windowWidth / elementWidth), 1);
};
