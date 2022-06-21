import {
  Container,
  Header,
  MobileShowMore,
  ShowMore,
  Text,
  TextContainer,
  ToggleShowMore,
  Wrapper,
} from "./AboutStyles";
import { FaRegLightbulb } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";
import { useState } from "react";

function About() {
  const [showMore, setShowMore] = useState(false);

  function toggleShowMore() {
    if (showMore) {
      setShowMore(false);
      document.getElementById("about").classList.remove("show-more");
    } else {
      setShowMore(true);
      document.getElementById("about").classList += " show-more";
    }
  }

  return (
    <Container id="about">
      <Wrapper
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <Header>
          <b className="important-text section__title">A</b>bout me
        </Header>

        <ToggleShowMore onClick={() => toggleShowMore()}>
          Wanna Know More? <HiLightBulb className="light-bulb--lit" />
          <FaRegLightbulb className="light-bulb--out" />
        </ToggleShowMore>

        <TextContainer>
          <div>
            <Text>
              Hello! My name is Troy Richards, and I am, what some would call, a{" "}
              <b className="important-text">Frontend Developer!!!!!!</b>
            </Text>
            <Text>
              If you couldn't tell from the AMAZING animations so far, I love to
              create websites/apps that look and feel amazing to use. I mainly
              work with <span className="skills-used">react</span> and{" "}
              <span className="skills-used">sass</span> but don't mind branching
              out for the right opportunity.
            </Text>
            <Text>
              <span className="important-text">Currently</span>, I am looking
              for opportunities to work remotely as a{" "}
              <span className="important-text"> Frontend Developer</span>. Want
              to know what I can bring to your team? Just a bit more scrolling
              and you can{" "}
              <a href="#skills" className="important-text-link">
                find out!
              </a>
            </Text>
          </div>

          <ShowMore>
            <MobileShowMore onClick={() => toggleShowMore()}>
              Wanna Know More? <HiLightBulb className="light-bulb--lit" />
              <FaRegLightbulb className="light-bulb--out" />
            </MobileShowMore>
            <p className="show-more__para">
              Let's talk about me as a person. I like to play games in my spare
              time, mainly moba's
              {"(SMITE!!!)"} and my favorite role is jungle. Don't ever ask me
              to play support. Just don't. Wrong tree. Another thing about me is
              I use to make use of my degree in audio production and make music.
              However, when covid hit, I had to sell a lot of my equipment and
              that made me very sad :(. My goal is buy my equipment back{" "}
              {"(or even better equipment)"} and get back to producing in my
              spare time.
            </p>
          </ShowMore>
        </TextContainer>
      </Wrapper>
    </Container>
  );
}

export default About;
