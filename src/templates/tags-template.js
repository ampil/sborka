import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import PostList from '../components/post-list';
import StyledLink from '../components/styled-link';
import styled from 'styled-components';

const TagsTemplate = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { totalCount } = data.allMarkdownRemark;
  const posts = data.allMarkdownRemark.nodes;
  const title = `Текстов от автора ${tag}`;

  return (
    <Layout title={title}>
      <TagsTemplateWrapper>
        <Title>
          {/* Текстов от автора "{tag}": {totalCount}  */}
          Автор: {tag}
        </Title>

        <PostList posts={posts} />

        <Link
          css={`
            margin-top: var(--size-300);
            display: inline-block;
            color: inherit;
            // text-transform: uppercase;
          `}
          to="/tags"
        >
          Посмотреть тексты других авторов
        </Link>

        {/* <StyledLink
          css={`
            margin-top: var(--size-400);
            display: inline-block;
          `}
          to="/tags"
        >
          Посмотреть посты всех авторов
        </StyledLink> */}
      </TagsTemplateWrapper>
    </Layout>
  );
};

export default TagsTemplate;

const TagsTemplateWrapper = styled.div`
  padding-top: var(--size-900);
`;

const Title = styled.h1`
  @media screen and (max-width: 700px) {
    & h1 {
      font-size: 6vw;
    }
  }

  @media screen and (max-width: 420px) {
    & h1 {
      font-size: 5vw;
    }
  }  
  // font-size: var(--size-700);
`;

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { tags: { in: [$tag] } }
        fields: { contentType: { eq: "posts" } }
      }
    ) {
      totalCount
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "DD MMMM YYYY", locale: "ru")
          description
          tags
          title
        }
        timeToRead
        excerpt
      }
    }
  }
`;
