import React from 'react';
import Container from './container';
import styled from 'styled-components';
import SocialLinks from './social-links';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterWrapper>
        <SocialLinksStyle>
          <SocialLinks />
        </SocialLinksStyle>

        <FooterAttribution>
          © 2023
          {/* Разработка сайта:{' '}
          <a href="https://t.me/ampil" target="_blank" rel="noreferrer">Андрей Ампилогов</a>
          <p></p>
          Иллюстрации:{' '}
          <a href="https://instagram.com/zubikistan" target="_blank" rel="noreferrer">Татьяна Зубарева</a> */}
        </FooterAttribution>
      </FooterWrapper>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  padding-top: var(--size-700);
  padding-bottom: var(--size-300);
  // margin-top: 6px;
`;

const FooterAttribution = styled.p`
  font-size: var(--size-300);

  & a {
    color: inherit;
  }
`;

const FooterWrapper = styled (Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const SocialLinksStyle = styled.div`
  //font-size: var(--size-300);

  
  & a {
    text-decoration: underline;
    font-size: var(--size-400);
    // '+2';

  }
`;
