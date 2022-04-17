import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.section`
  background-color: var(--main-BG);
  padding: var(--containerPadding);

  min-height: 100vh;
`;

export const Wrapper = styled(motion.div)`
  width: 85%;
  margin: 0 auto;
`;

export const Header = styled.h2`
  text-align: center;

  letter-spacing: 2px;
  font-size: var(--headers);

  text-shadow: var(--headerTextShadow);

  margin-bottom: 100px;
`;

export const DevSkill = styled.p`
  flex: 1;
  min-width: max-content;

  white-space: nowrap;
  text-align: center;
  padding: 15px 20px;

  margin: 10px;

  text-transform: uppercase;
  font-weight: bolder;
  letter-spacing: 1px;

  border: 1px solid var(--highlightColor);
  color: var(--dimHighlightColor);
  transition: 0.5s ease-in-out;
  text-shadow: 0px 10px 20px grey;

  &:hover {
    cursor: default;
    box-shadow: 0px 5px 9px grey;

    color: var(--highlightColor);
    border: 1px solid var(--dimHighlightColor);
    border-radius: 15px;
  }
`;
