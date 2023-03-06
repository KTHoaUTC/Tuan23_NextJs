import styled from "styled-components";
export type CSSType = {
  make_css: {
    default: React.CSSProperties;
    mobile: React.CSSProperties;
    desktop: React.CSSProperties;
  };
};
export const break_points = {
  desktop_:"@media screen and (min-width: 1280px)",
  laptop_:"@media screen and (max-width: 1440px)",
  tablet_:"@media screen and (max-width: 800px)",
  mobile_:"@media screen and (max-width: 390px)",
};
