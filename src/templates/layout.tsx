import React from "react"
import "../styles/styles.css"
//import Bio from "../components/bio"
import SEO from "../components/seo"
import { Wrapper, Space } from "../styles/components"
import Navbar from "../components/Navbar"
import { Link, graphql, useStaticQuery } from "gatsby"

export default function Layout(props) {
  const data = useStaticQuery(graphql`
    query {
      allSitePage(
        filter: { component: { regex: "/pages/" }, componentChunkName: {} }
      ) {
        nodes {
          path
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const {
    allSitePage: { nodes },
    site: { siteMetadata },
  } = data

  return (
    <Wrapper>
      <Navbar invert={props.invert} />
      <SEO />
      {props.children}
      <Space>
        <footer>
          © {new Date().getFullYear()}, Built by Alejandro Aspinwall, using{" "}
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Space>
    </Wrapper>
  )
}
