import React from "react"
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"
import { AiFillMail } from "react-icons/ai"
import { colors } from "../styles/components"
import styled from "styled-components"

const SocialIcons = styled.div`
  font-size: 2rem;

  a {
    padding: ${props => props.p || "2rem 1rem 2rem 0px"};
    filter: opacity(0.8);
    color: ${props => props.c};
    transition: filter 0.4s ease-in-out, color 0.4s ease-in-out;
    :hover,
    :focus {
      filter: opacity(1);
      color: ${props => props.h};
    }
  }
`

export default function Social({ c = colors.accent, h = "white", p }) {
  return (
    <SocialIcons c={c} h={h} p={p}>
      <a href={`https://github.com/aaspinwall`} target="blank">
        <FaGithub />
      </a>
      <a
        href={`https://www.linkedin.com/in/alejandroaspinwall/?locale=en_US`}
        target="blank"
      >
        <FaLinkedin />
      </a>
      <a href={`https://twitter.com/aaspinwall`} target="blank">
        <FaTwitter />
      </a>
      <a href="mailto:aaspinwall@gmail.com">
        <AiFillMail />
      </a>
    </SocialIcons>
  )
}
