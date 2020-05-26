// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../templates/layout"

const Index = ({ data }) => {
  const {
    allMarkdownRemark: {
      nodes: [fileAbsolutePath],
    },
  } = data
  console.log(fileAbsolutePath)
  const content = fileAbsolutePath.frontmatter
  return (
    <Layout>
      <h3>{content.title}</h3>
      <p>{fileAbsolutePath.excerpt}</p>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/landing/" } }) {
      nodes {
        fileAbsolutePath
        frontmatter {
          title
        }
        excerpt
      }
    }
  }
`
