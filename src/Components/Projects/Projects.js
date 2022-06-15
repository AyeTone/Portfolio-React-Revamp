import React from "react";
import Project from "./Project/Project";
import {
  Container,
  Header,
  ProjectsContainer,
  Headings,
  Wrapper,
  SubHeader,
  FYI,
  Brackets,
} from "./ProjectsStyles";

const Projects = () => {
  return (
    <Container id="projects">
      <Wrapper
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <Headings>
          <Header>
            Here are some of my <span className="skills-used">projects</span>
          </Header>
        </Headings>

        <ProjectsContainer>
          <Project
            title="REST Countries API"
            img={require("../../images/rest-countries-api.png")}
            liveSite="https://ayetone.github.io/rest-countries-api/"
            sourceCode="https://github.com/AyeTone/rest-countries-api"
            desc={
              <>
                Every wanted to know something about a country that you didn't
                know yet? I'm sure this UI will tell something you didn't know
                about that one country! If it's not accurate, blame the creaters
                of this{" "}
                <a
                  href="https://restcountries.com/"
                  target="_blank"
                  className="important-text-link"
                  rel="noreferrer"
                >
                  REST Countries
                </a>{" "}
                API! T'was but tah messenger I was.
              </>
            }
            devWith="React, TypeScript, Sass w/Gulp, BEM, REST API"
          />
          <Project
            title="Ecommerce Product Page"
            img={require("../../images/ecommerce-product-page.png")}
            liveSite="https://ayetone.github.io/ecommerce-product-page/"
            sourceCode="https://github.com/AyeTone/ecommerce-product-page"
            desc={
              <>
                Did you ever want to not buy something? You came to the right
                place! This website allows users{" "}
                <small>{"(Meaning you... maybe)"}</small> to cycle through the
                display options, add/remove items from a cart and not buy it!
                Exciting Right!?!?!
              </>
            }
            devWith="React, TypeScript, Sass w/gulp, BEM"
          />
          <Project
            title="Interactive Comment Section"
            img={require("../../images/interactive-comment.png")}
            liveSite="https://ayetone.github.io/interactive-comment-section/"
            sourceCode="https://github.com/AyeTone/interactive-comment-section"
            desc={
              <>
                Ever wanted a comment section all to yourself? Look no further!
                This UI allows you <small>{"(the user)"}</small> to talk
                yourself, edit your cringe, and delete it once your filled with
                regret! This UI was brought to you by Troy and sponsered by
                Handsome JACK!
                <small>{"(Not really)"}</small>
              </>
            }
            devWith="React, Sass w/ Gulp, BEM"
          />
          <Project
            title="Github Showcase"
            img={require("../../images/github-repo-display.png")}
            liveSite="https://ayetone.github.io/github-repo/"
            sourceCode="https://github.com/AyeTone/github-repo"
            desc={
              <>
                The shade room at work just got a bit darker... Use this UI to
                look up the stats of your co-workers GitHub account. That's if
                they are willing to share their username! I'm sure the detective
                in you will find it.
              </>
            }
            devWith="React, Sass w/ Gulp, REST API"
          />
          <Project
            title="Google Clone"
            img={require("../../images/google-clone.png")}
            liveSite="https://ayetone.github.io/google-clone/"
            sourceCode="https://github.com/AyeTone/google-clone"
            desc={
              <>
                A CLONE?!?!? I know what you're thinking, he probably followed a
                tutorial on youtube... you are 100% correct. I won't lie, I
                coded along with a youtube to make this. HOWEVER! I did learn a
                good bit about the tech used to make it. I am not a copy paste
                warrior!<small>{"(StackOver RN 👀)"}</small>... all the time...
                shhh..
              </>
            }
            devWith="React, CSS BEM, Firebase, React Router, Material UI"
          />
          <Project
            title="Time-Tracking-Dashboard"
            img={require("../../images/time-tracking-dashboard.png")}
            liveSite="https://ayetone.github.io/Time-Tracking-Dashboard/"
            sourceCode="https://github.com/AyeTone/Time-Tracking-Dashboard"
            desc={
              <>
                I'm going to be honest with you. This is probably the most
                lackluster project on this list. However it hold a special place
                in my heart as my turning point in getting better at react.
              </>
            }
            devWith="React, Styled Components"
          />
        </ProjectsContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
