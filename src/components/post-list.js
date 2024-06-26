import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';
import Tags from './tags';

const PostList = ({posts}) => {
  const PostList = posts.map (({frontmatter, fields, excerpt, timeToRead}) => {
    const {title, tags, date, description, name} = frontmatter;
    const {slug} = fields;

    return (
      <PostListItem
        key={slug}
        tags={tags}
        title={title}
        //date={date}
        slug={slug}
        name={name}
        timeToRead={timeToRead}
        description={description}
        excerpt={excerpt}
      />
    );
  });

  return <StyledPostList>{PostList}</StyledPostList>;
};

export default PostList;

const PostListItem = ({
  title,
  date,
  timeToRead,
  tags,
  excerpt,
  name,
  description,
  slug,
}) => {
  return (
    <StyledPostListItem>
      {/* <Tags tags={tags} /> */}
      {/* <div class="index-image" /> */}
      {/* <img src="/media/zu-talks-posleslovie.png"></img> */}
      <PostListTitle>
        <Link to={slug}>{title}</Link>
      </PostListTitle>
      <PostListExcerpt
        dangerouslySetInnerHTML={{
          __html: description || excerpt,
        }}
      />
      <PostListMeta>
        <span>{timeToRead} мин.</span>

        {/* <span>{date}</span> */}
        {/* <span>{name}</span> */}

        <TagListProp>
          <Tags tags={tags} />
        </TagListProp>
      </PostListMeta>
    </StyledPostListItem>
  );
};

const StyledPostList = styled.ul`
  padding: 0;
  list-style: none;
  display: grid;
  justify-items: center;
  grid-gap: var(--size-600);
  grid-template-columns: repeat(auto-fit, minmax(35ch, 1fr));
  // background: url("/media/zu-talks-posleslovie.png") center center / 50% no-repeat fixed white;

  @media screen and (max-width: 500px) {
    & {
      display: block;
      // background: url("/media/zu-talks-posleslovie.png") center center / 80% no-repeat fixed white;
    }
  }
`;

const StyledPostListItem = styled.li`
  display: flex;
  padding: 1.5rem;
  border-radius: 8px;
  position: relative;
  flex-direction: column;
  transition: all 0.3s ease-out;

  body.light-mode & {
    backdrop-filter: blur(10px);
    border: 1px solid #515151;
    background-color: rgba(255, 255, 255, 0.3);
  }

  body.light-mode &:hover {
    //background-color: rgba(255, 255, 15, 0.5);
    background-color: #434343;
  //#3b3b3c;
    //#5F9EA0
    color: white;
  }

  body.dark-mode & {
    background-color: #3b3b3c;
    border: 1px solid #515151;
  }

  body.dark-mode &:hover {
    //background-color: rgba(255, 255, 15, 0.5);
    background-color: #FFFFFE;
    color: black;
  }

  @media screen and (max-width: 500px) {
    & {
      margin-top: var(--size-600);
    }
  }
`;

const PostListTitle = styled.h2`
  line-height: 1.2;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: var(--size-600);
  font-weight: 800;

  & a {
    text-decoration: none;
    color: inherit;
  }

  & a::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }


  @media screen and (max-width: 700px) {
    & {
      font-size:6vw;
    }

  @media screen and (max-width: 420px) {
    & {
      font-size:5vw;
    }

  }
`;

const PostListExcerpt = styled.p`
  margin-top: auto;
  font-size: var(--size-400);

  & a {
    text-decoration: none;
    color: #962020;
  }
`;

const PostListMeta = styled.div`
  margin-top: 2rem;

  font-size: var(--size-300);
  display: flex;
  justify-content: space-between;
`;

const TagListProp = styled.div`
  // margin-top: 2rem;
  max-width: 200px;
  font-size: var(--size-300);
  overflow: scroll;
  display: flex;
  text-overflow: ellipsis;
  white-space: nowrap;

  ::-webkit-scrollbar {
    display: none;
  }
  
  /* Hide scrollbar for IE, Edge and Firefox */
   {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  } 

`;
