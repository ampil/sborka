import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';

const PostLink = ({posts}) => {
  const PostLink = posts.map (({frontmatter, fields, excerpt, timeToRead}) => {
    const {title, description, name} = frontmatter;
    const {slug} = fields;

    return (
      <PostLinkItem
        key={slug}
        title={title}
        slug={slug}
        name={name}
        // timeToRead={timeToRead}
        description={description}
        excerpt={excerpt}
      />
    );
  });

  return <StyledPostLink>{PostLink}</StyledPostLink>;
};

export default PostLink;

const PostLinkItem = ({title, excerpt, name, description, slug}) => {
  return (
    // <div class="index-image">
    (
      <StyledPostLinkItem>
        <PostLinkTitle>
          <Link to={slug}>{title}</Link>
        </PostLinkTitle>
        <PostLinkExcerpt
          dangerouslySetInnerHTML={{
            __html: description || excerpt,
          }}
        />
        <PostLinkMeta>

          <span>{name}</span>
        </PostLinkMeta>
      </StyledPostLinkItem>
    )
    // </div>
  );
};

const StyledPostLink = styled.ul`
  padding: 20;
  padding-left: 0;
  list-style: none;
  display: block;
  justify-items: center;
  grid-gap: var(--size-600);
  grid-template-columns: repeat(auto-fit, minmax(35ch, 1fr));
  
  @media screen and (max-width: 500px) {
    & {
      display: block;
    }
  }
`;

const StyledPostLinkItem = styled.li`
  display: flex;
  padding: 0 1.5rem 0 1.5rem;
  border-radius: 8px;
  position: relative;
  flex-direction: column;
  transition: all 0.3s ease-out;
  margin-bottom: 1.5rem;

  body.light-mode & {
    backdrop-filter: blur(10px);
    //border: 1px solid rgba(255, 255, 255, 0.5);
    border: 1px solid #515151;
    //background-color: #3b3b3c;
    background-color: rgba(255, 255, 255, 0.3);
  }

  body.light-mode &:hover {
    //background-color: rgba(255, 255, 15, 0.5);
    //background-color: #5F9EA0
  }

  body.dark-mode & {
    background-color: #3b3b3c;
    border: 1px solid #515151;
  }

  @media screen and (max-width: 500px) {
    & {
      margin-top: var(--size-600);
    }
  }
`;

const PostLinkTitle = styled.h2`
  line-height: 1.2;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: var(--size-600);
  font-weight: 800;

  & a {
    text-decoration: none;
    color: #962020;
  }

  & a::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const PostLinkExcerpt = styled.p`
  margin-top: auto;
  font-size: var(--size-400);

  & a {
    text-decoration: none;
    color: #962020;
  }
`;

const PostLinkMeta = styled.div`
  margin-top: 2rem;

  font-size: var(--size-300);
  display: flex;
  justify-content: space-between;
`;
