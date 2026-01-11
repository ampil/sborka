// src/templates/post-template.js

import React from 'react';
import {Link, graphql} from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import styled from 'styled-components';
import Tags from '../components/tags';
import zuHomeImg from '../images/zu-home.png';

const PostTemplate = ({data}) => {
  const {frontmatter, excerpt, html} = data.markdownRemark;
  const prev = data.prev;
  const main = data.main;
  const next = data.next;

  return (
    <Layout
      // title={frontmatter.title}
      // description={frontmatter.description || excerpt}
      socialImage={
        frontmatter.social_image ? frontmatter.social_image.absolutePath : ''
      }
    >
      <PostWrapper>
        <article>
          <PostTitle>{frontmatter.title}</PostTitle>

          <PostContent dangerouslySetInnerHTML={{__html: html}} />

          <TagListProp>
            <Tags tags={frontmatter.tags} />
          </TagListProp>
        </article>

        <PostPagination>
          {prev &&
            <div>
              <span>Назад</span>
              <Link to={prev.fields.slug}> {prev.frontmatter.title}</Link>
            </div>}

          {main &&
            <div>
              <span><Link to="/">Все тексты</Link></span>
              {/* <Link to="/"> Все тексты<img class="displayed" src={zuHomeImg} alt="Домой" width={80}/></Link> */}
            </div>}

          {next &&
            <div>
              <span>Вперёд</span>
              <Link to={next.fields.slug}> {next.frontmatter.title}</Link>
            </div>}
        </PostPagination>

      </PostWrapper>
    </Layout>
  );
};

const PostWrapper = styled.div`
  padding-top: var(--size-900);
  padding-bottom: var(--size-900);
  margin-left: auto;
  margin-right: auto;
  max-width: 70ch;
  word-wrap: break-word;
  font-family: "Lora";
`;

const PostTitle = styled.h1`
  font-family: "Montserrat";

  @media screen and (min-width: 701px) {
    & h1 {
      font-size: var(--size-700);
    }
  }

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
`;

const PostContent = styled.section`
  padding-top: var(--size-600);
  
  & > * + * {
    margin-top: var(--size-300);
  }

  & > p + p {
    margin-top: var(--size-600);
  }

  * + h1,
  * + h2,
  * + h3 {
    margin-top: var(--size-900);
  }

  b,
  strong {
    font-weight: 600;
  }

  a {
    color: #962020; /* Цвет для СВЕТЛОЙ темы (по умолчанию) */
    text-decoration: underline;
    transition: color 0.2s ease;
  }

  /* Добавляем стиль для ТЕМНОЙ темы */
  body.dark-mode & a {
    color: #ff9999; /* Светло-красный (или любой другой светлый оттенок) */
    /* Или #e0e0e0 для белого, или #ffcccb */
  }

  blockquote {
    padding-left: var(--size-400);
    border-left: 5px solid;
    font-style: italic;
  }

  /* Стили для инлайн-кода (слов в апострофах) */
  /* Используем селектор & p > code, чтобы перебить глобальные стили PrismJS */
  & p > code,
  & li > code,
  & blockquote > code {
    font-family: "Source Sans Pro", Consolas, monospace;
    padding: 0.2em 0.4em;
    border-radius: 4px;
    font-size: 0.9em;
    
    /* СВЕТЛАЯ ТЕМА (и дефолт) */
    /* !important нужен, чтобы перебить prism-coldark-dark.css */
    background-color: rgba(0, 0, 0, 0.08) !important; /* Светло-серый, почти прозрачный */
    color: #c7254e !important;                        /* Темно-красный текст */
    border: 1px solid rgba(0,0,0,0.1);
    text-shadow: none !important;                     /* Убираем тени от Prism */
  }

  /* ТЕМНАЯ ТЕМА */
  body.dark-mode & p > code,
  body.dark-mode & li > code,
  body.dark-mode & blockquote > code {
    background-color: rgba(255, 255, 255, 0.15) !important; /* Полупрозрачный белый */
    color: #ffbdba !important;                              /* Светло-розовый */
    border: 1px solid rgba(255,255,255,0.2);
  }


  /* Стили для больших блоков кода */
  pre {
    overflow-x: auto;
    white-space: pre-wrap;
    max-width: 100%;
  }

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
  
`;

const PostPagination = styled.nav`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: var(--size-900);

  & > * {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    margin-bottom: 1rem;
  }

  & > *:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  & span {
    text-transform: uppercase;
    opacity: 0.6;
    font-size: var(--size-400);
    padding-bottom: var(--size-500);
  }

  & a {
    color: inherit;
    text-decoration: none;
    font-size: var(--size-400);
  }

  & a::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
`;

const TagListProp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-wrap: wrap;
  padding-top: 2rem;
  margin-top: var(--size-100);
  overflow: wrap;
  white-space: wrap;
`;

export const pageQuery = graphql`
  query PostBySlug($slug: String!, $prevSlug: String, $nextSlug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 160)
      html 
      frontmatter {
        title
        tags
        date(formatString: "DD MMMM YYYY", locale: "ru")
        description
      }
    }

    prev: markdownRemark(fields: { slug: { eq: $prevSlug } }) {
      frontmatter {
        title
      }
      fields {
        slug
      }
    }

    main: markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      fields {
        slug
      }
    }

    next: markdownRemark(fields: { slug: { eq: $nextSlug } }) {
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`;

export const Head = ({ data }) => {
  const { frontmatter, excerpt } = data.markdownRemark;
  return (
    <Seo
      title={frontmatter.title}
      description={frontmatter.description || excerpt}
      // socialImage={...} 
    />
  );
};

export default PostTemplate;