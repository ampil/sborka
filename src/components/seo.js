// src/components/seo.js

import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            openGraphImage
            siteUrl
            description
            social {
              telegram
            }
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <> {/* Возвращаем Fragment, не <Head> */}
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      
      {/* OpenGraph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={`${site.siteMetadata.siteUrl}/${site.siteMetadata.openGraphImage}`} />
      <meta property="og:type" content="website" />
    
      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata?.social?.telegram || ``} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
    
      {/* Дополнительные meta */}
      {meta.map((metaTag, i) => (
        <meta key={`meta-${i}`} {...metaTag} />
      ))}
    </>
  );
};

Seo.defaultProps = {
  lang: `ru`,
  meta: [],
  description: ``,
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default Seo;



// import * as React from "react";
// import PropTypes from "prop-types";
// import { Head } from "gatsby";  // ← Новый импорт
// import { useStaticQuery, graphql } from "gatsby";

// const Seo = ({ description, lang, meta, title }) => {
//   const { site } = useStaticQuery(
//     graphql`
//       query {
//         site {
//           siteMetadata {
//             title
//             openGraphImage
//             siteUrl
//             description
//             social {
//               telegram
//             }
//           }
//         }
//       }
//     `
//   );

//   const metaDescription = description || site.siteMetadata.description;
//   const defaultTitle = site.siteMetadata?.title;

//   return (
//     <Head>
//       <html lang={lang} />
//       <title>{title}</title>
//       <meta name="description" content={metaDescription} />
      
//       {/* OpenGraph */}
//       <meta property="og:title" content={title} />
//       <meta property="og:description" content={metaDescription} />
//       <meta property="og:image" content={`${site.siteMetadata.siteUrl}/${site.siteMetadata.openGraphImage}`} />
//       <meta property="og:type" content="website" />
      
//       {/* Twitter */}
//       <meta name="twitter:card" content="summary" />
//       <meta name="twitter:creator" content={site.siteMetadata?.social?.telegram || ``} />
//       <meta name="twitter:title" content={title} />
//       <meta name="twitter:description" content={metaDescription} />
      
//       {/* Дополнительные meta */}
//       {meta.map((metaTag, i) => (
//         <meta key={`meta-${i}`} {...metaTag} />
//       ))}
//     </Head>
//   );
// };

// Seo.defaultProps = {
//   lang: `ru`,
//   meta: [],
//   description: ``,
// };

// Seo.propTypes = {
//   description: PropTypes.string,
//   lang: PropTypes.string,
//   meta: PropTypes.arrayOf(PropTypes.object),
//   title: PropTypes.string.isRequired,
// };

// export default Seo;
