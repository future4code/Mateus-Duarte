import { keyframes } from "styled-components";

export const scaleOutTR = keyframes`
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0);
            transform: scale(0);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 1;
  }



`