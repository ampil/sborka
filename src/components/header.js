import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';
import Container from './container';
import ThemeSwitch from './theme-switch';
import {useStaticQuery, graphql} from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
import zuHomeImg from '../images/zu-praktikum.png';

//const image = getImage(site.zuhome);

const HEADER_NAV_ITEM = [
  {
    label: 'Все тексты',
    url: '/',
    isExternal: false,
  },
  // {
  //   label: "Авторы",
  //   url: "/tags",
  //   isExternal: false,
  // },
  {
    label: 'Команда',
    url: '/about',
    isExternal: false,
  },
  {
    label: 'Напишите нам',
    url: '/contact',
    isExternal: false,
  },
];

const Header = () => {
  const {site} = useStaticQuery (
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <StyledHeader>
      <HeaderWrapper>
        <HeaderTitle>
          <Link to="/">
            {' '}
            <img src={zuHomeImg} alt={site.siteMetadata.title} width={80} />
          </Link>
        </HeaderTitle>

        <HeaderNavList>
          {HEADER_NAV_ITEM.map ((item, index) => {
            if (item.isExternal) {
              return (
                <HeaderNavListItem key={index}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                </HeaderNavListItem>
              );
            }

            return (
              <HeaderNavListItem key={index}>
                <Link to={item.url}>{item.label}</Link>
              </HeaderNavListItem>
            );
          })}
          <HeaderNavListItem>
            <ThemeSwitch />
          </HeaderNavListItem>
        </HeaderNavList>
      </HeaderWrapper>
    </StyledHeader>
  );
};

export default Header;

const HeaderNavList = ({children}) => {
  return (
    <StyledNav>
      <StyledNavList>{children}</StyledNavList>
    </StyledNav>
  );
};

const HeaderNavListItem = ({children}) => {
  return <StyledNavListItem>{children}</StyledNavListItem>;
};

const StyledHeader = styled.header`
  padding-top: var(--size-300);
`;

const HeaderWrapper = styled (Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderTitle = styled.div`
  & a {
    text-transform: uppercase;
    text-decoration: none;
    font-size: var(--size-400);
    color: inherit;
    font-family: 'Montserrat';
  }
`;

const StyledNav = styled.nav`
  position: static;
  padding: 0;
  background: transparent;
  backdrop-filter: unset;
  // font-family: 'Advent Pro';
  font-size: var(--size-200);
  // font-family: 'Lora';
  font-family: 'Montserrat';
`;

const StyledNavList = styled.ul`
  display: flex;
  list-style-type: none;

  @media screen and (min-width: 700px) {
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0px;
  }  

  @media screen and (max-width: 700px) {
    display: flex;
    align-items: flex-end;
    flex-flow: column;
    justify-content: right;
    padding-right: 14px;
    max-width: 300px;
    flex-direction: column;
  }  
`;

const StyledNavListItem = styled.li`
@media screen and (min-width: 701px) {
  margin-right: 2rem;
}  

@media screen and (max-width: 700px) {
  :last-of-type {
     margin-top: 0.3rem;
   }

   & a {
    font-size: 0.7rem;
  }
}    

// &:not(:last-of-type) {

  & a {
    color: inherit;
    //text-transform: uppercase;
    font-size: var(--size-300);
    text-decoration: none;
    letter-spacing: 0.1rem;
  }

`;
