// Gatsby supports TypeScript natively!
import React from "react"
import { graphql, navigate, Link } from "gatsby"
import { highlightWords } from "../utils/highlightWords"
import Img from "gatsby-image"
import SEO from "../components/seo"
import FeaturedProjectsV2 from "../components/projects"

import {
  Section as S,
  Hero,
  Tags,
  Button,
  HeroP,
  ImageFull,
  Bio,
  Projects,
  SectionTag,
  Paragraph,
  Header,
  CupContainer,
  colors,
} from "../styles/components"

import styled, { keyframes } from "styled-components"
import { fadeIn } from "react-animations"

import Clouds from "../components/Clouds"
import Layout from "../templates/layout"
import Social from "../components/Social"
import Featured from "../components/Featured"
import SkillIcons from "../components/SkillIcons"

import Steam from "../draw/steam/steam_1.svg"
import Cup from "../draw/cup.svg"

const FadeIn = keyframes`${fadeIn}`

const Section = styled(S)`
  animation: 1s ${FadeIn};
`

const Index = ({ data }) => {
  React.useEffect(
    () =>
      console.log(
        ` _____________________________________________________________________
  
                                                        
        _|    _|    _|_|    _|      _|  _|_|_|_|        _|_|    
        _|    _|  _|    _|  _|      _|  _|            _|    _|  
        _|_|_|_|  _|_|_|_|  _|      _|  _|_|_|        _|_|_|_|  
        _|    _|  _|    _|    _|  _|    _|            _|    _|  
        _|    _|  _|    _|      _|      _|_|_|_|      _|    _|  
                                                                
                                                                
                                                
        _|      _|  _|_|_|    _|_|_|  _|_|_|_|  
        _|_|    _|    _|    _|        _|        
        _|  _|  _|    _|    _|        _|_|_|    
        _|    _|_|    _|    _|        _|        
        _|      _|  _|_|_|    _|_|_|  _|_|_|_|  
                                                
                                                
                                            
        _|_|_|      _|_|    _|      _|  _|  
        _|    _|  _|    _|    _|  _|    _|  
        _|    _|  _|_|_|_|      _|      _|  
        _|    _|  _|    _|      _|          
        _|_|_|    _|    _|      _|      _|  



        WEBSITE DESIGNED AND BUILT BY ALEJANDRO ASPINWALL  _______________________________________________


                
  `,
      ),
    [],
  )
  const {
    allMdx: {
      nodes: [fileAbsolutePath],
    },
  } = data

  const content = fileAbsolutePath.frontmatter
  const { title, subtitle, action } = content.mainpitch

  const getTop = () => {
    return (
      <div>
        {makeClouds(30, 1)}
        <div className="marquee">
          <Hero invert={true}>{highlightWords(title)}</Hero>
          <Social />
          <HeroP>{subtitle}</HeroP>
        </div>
      </div>
    )
  }

  const BioSection = ({ bio }) => {
    const { title, features, image } = bio

    return (
      <Bio>
        <div id="bioContainer">
          <h1 style={{ height: "3rem" }}>{highlightWords(title)}</h1>
          <ImageFull id="bioImage">
            <Img
              alt="a picture of alejandro"
              fluid={image.childImageSharp.fluid}
              style={{ gridArea: "image", maxWidth: "320px", margin: "auto" }}
            />
          </ImageFull>

          <div id="bioText">
            <SkillIcons />

            {features.map(feature => {
              return (
                <div>
                  <h3>{feature.header}</h3>
                  <p>{feature.body}</p>
                </div>
              )
            })}
            <ReadMore>
              <Link to="/about">Keep reading my bio</Link>
            </ReadMore>
          </div>
        </div>
      </Bio>
    )
  }
  const ProjectsSection = ({ projects }) => {
    return (
      <>
        <h1>{highlightWords("**Projects")}</h1>

        {projects.map((project, i) => {
          const { action, body, link, title, image } = project

          return (
            <Projects>
              {/* <SectionTag className="latest" style={{ gridArea: "top" }}>
                LATEST WORK
              </SectionTag> */}
              <FeaturedProjectsV2 project={project} />
              <Paragraph style={{ gridArea: "text" }}>{body}</Paragraph>
              <Button style={{ gridArea: "button" }}>
                {slidingButton(action, link)}
              </Button>
              <ProjectImage style={{ gridArea: "image" }}>
                <Link
                  to={link}
                  onKeyDown={e => {
                    if (e.keyCode === 13) navigate(link)
                  }}
                >
                  <Img
                    fluid={image.childImageSharp.fluid}
                    className="imageFluidContainer"
                    alt="project image"
                  />
                </Link>
              </ProjectImage>
            </Projects>
          )
        })}
      </>
    )
  }

  const HeroSection = styled(Section)`
    max-width: 100vw;
  `

  const Email = styled.a`
    font-size: 1.3rem;
    * {
      padding-bottom: 1rem;
      margin: 2rem 0 !important;
    }
    :hover {
      filter: brightness(1.2);
    }
    cursor: pointer;
  `

  const ProjectImage = styled.div`
    grid-area: image;

    .imageFluidContainer {
      max-width: 500px;
      border-radius: 40px;
      transition:
        transform 0.3s ease-in-out,
        box-shadow 0.2s ease-in-out;
      :hover,
      :focus {
        transform: translate(0, -2%);
        box-shadow: 0px 40px 8px -10px#585858;
        cursor: pointer;
      }
    }
  `
  const ReadMore = styled.div`
    font-family: Muli;
    transition: 0.8s ease-in-out;

    :hover {
      font-weight: bold;
      filter: brightness(0.8);
    }
  `

  const ContactSection = ({ contact }) => {
    const { action, title } = contact

    return (
      <div id="contactBox">
        <Hero>{highlightWords(title)}</Hero>
        <CupContainer className="cup">
          <Steam />
          <Cup />
        </CupContainer>

        <Email href={"mailto:contact@aaspinwall.com"}>
          contact@aaspinwall.com
        </Email>

        <Button
          style={{
            gridArea: "button",
            marginTop: "1rem",
            marginBottom: "3rem",
          }}
        >
          {slidingButton(
            action,
            "/",
            () => (window.location.href = "https://calendly.com/aaspinwall/15"),
          )}
        </Button>
      </div>
    )
  }

  const slidingButton = (action: string, link: string = "/", alt?) => {
    return [0, 0].map((e, i) =>
      alt ? (
        <div className="topButton" tabIndex={i === 0 ? 0 : -1} onClick={alt}>
          {action}
        </div>
      ) : (
        <Link tabIndex={i === 0 ? 0 : -1} to={link}>
          {action}
        </Link>
      ),
    )
  }

  const makeClouds = (cloudCount: number, mult: number = 1) => {
    const cloudArray = [...Array(cloudCount * mult).keys()]
    const wordArray = [...Array((cloudCount * mult) / 2).keys()]
    return (
      <>
        {cloudArray.map(() => {
          function randomizeValue(min, max) {
            const rand = Math.random() * (max - min) + min
            return rand.toString()
          }
          return (
            <Clouds
              roll={`${randomizeValue(120, 300)}s`}
              top={`${randomizeValue(12, 90)}vh`}
              pulse={`${randomizeValue(7, 12)}s`}
              size={`${randomizeValue(0.5, 7)}rem`}
              offset={`${randomizeValue(-10, 90)}vw`}
            />
          )
        })}
      </>
    )
  }

  return (
    <Layout invert={true}>
      <SEO title="Alejandro Aspinwall | Software Engineer" />
      <div
        style={{
          padding: "0 clamp(1rem, 7vw, 200px)",
          background: colors.background,
        }}
      >
        <HeroSection invert={true}>{getTop()}</HeroSection>
      </div>
      <Section id="bio">
        <BioSection bio={content.bio} />
      </Section>
      <Section id="featured">
        <h1>{highlightWords("**Featured")}</h1>
        <Featured />
      </Section>
      <Section id="projects">
        <ProjectsSection projects={content.projects} />
      </Section>
      <Section id="contact">
        <ContactSection contact={content.contact} />
      </Section>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    allMdx(filter: { fileAbsolutePath: { regex: "/landing/" } }) {
      nodes {
        fileAbsolutePath
        frontmatter {
          title
          mainpitch {
            title
            subtitle
            action
          }
          projects {
            action
            body
            link
            title
            image {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          bio {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 500, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            features {
              header
              body
            }
          }
          contact {
            action
            title
          }
        }
      }
    }
  }
`