import styled from "styled-components";
import { tablet, desktop } from "../../responsive";
import { motion } from "framer-motion";

export const Container = styled.section`
  padding-top: 10rem;
  padding-bottom: 10rem;

  background-color: var(--main-BG);
  border-top: 4px solid var(--highlightColor);
  border-bottom: 4px solid var(--highlightColor);
`;

export const Wrapper = styled(motion.div)`
  width: var(--wrapper);
  margin: 0 auto;

  text-align: center;
`;

export const Header = styled.h2`
  letter-spacing: 2px;
  font-size: var(--headers);
`;

export const SubHeader = styled.h1`
  color: var(--highlightColor);
  font-size: 3rem;
  margin: 3rem 0;

  ${tablet({
    fontSize: "3rem",
  })}

  ${desktop({
    fontSize: "3rem",
    lineHeight: "20px",
  })}
`;

export const Small = styled.span`
  font-size: 11px;
  color: var(--dimHighlightColor);
  font-style: italic;
`;

export const TextContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  line-height: 2rem;

  ${tablet({
    gap: "2.4rem",
  })}

  ${desktop({
    width: " 70%",
    margin: "0 auto",
    fontSize: "1.2rem",
    lineHeight: "2rem",
  })}
`;

export const Text = styled.p`
  transition: 0.3s;

  .about-title {
    display: inline-block;
    font-size: 24px;
    margin-top: 16px;

    ${desktop({
      fontSize: "32px",
    })}
  }

  .shake {
    display: inline-block;
    animation: shaking 1s infinite;
  }

  &:hover {
    opacity: 1 !important;
  }
`;
