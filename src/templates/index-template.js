// src/templates/index-template.js

import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout';
import PostList from '../components/post-list';
import styled from 'styled-components';
import Seo from '../components/seo';


const HomePage = ({data}) => {
  const posts = data.allMarkdownRemark.nodes;
  const intro = data.markdownRemark.html;
  const title = data.markdownRemark.frontmatter.title;

  return (
    (
      <Layout title="">
        <Intro
          dangerouslySetInnerHTML={{
            __html: intro,
          }}
        />

        <PostList posts={posts} />

      </Layout>
    )
  );
};

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90ch;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  margin-top: var(--size-800);
  margin-bottom: var(--size-900);
  text-align: center;
  //background-image: url("/media/zu-talks-posleslovie.png");

  & p {
    font-size: var(--size-400);
  }

  & div {
    margin-top: 2rem;
  }

  @media screen and (max-width: 700px) {
    & h1 {
      font-size: 8vw;
    }
  }

  @media screen and (max-width: 420px) {
    & h1 {
      font-size: 7vw;
    }
  }

`;

export const pageQuery = graphql`query ($slug: String!) {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(
    filter: {fields: {contentType: {eq: "posts"}}}
    sort: {frontmatter: {date: DESC}}
    limit: 49
  ) {
    nodes {
      fields {
        slug
      }
      excerpt
      timeToRead
      frontmatter {
        date(formatString: "DD MMMM YYYY", locale: "ru")
        description
        name
        title
        tags
      }
    }
  }
  markdownRemark(fields: {slug: {eq: $slug}}) {
    html
    frontmatter {
      title
    }
  }
}`;

export const Head = ({ data }) => (
  <Seo title={data.markdownRemark.frontmatter.title} />
);

export default HomePage;