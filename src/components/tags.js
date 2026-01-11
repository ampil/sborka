//src/components/tags.js

import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';

// транслитерация букв
const letters = {
  Ё: 'YO',
  Й: 'I',
  Ц: 'TS',
  У: 'U',
  К: 'K',
  Е: 'E',
  Н: 'N',
  Г: 'G',
  Ш: 'SH',
  Щ: 'SCH',
  З: 'Z',
  Х: 'H',
  Ъ: "'",
  ё: 'yo',
  й: 'i',
  ц: 'ts',
  у: 'u',
  к: 'k',
  е: 'e',
  н: 'n',
  г: 'g',
  ш: 'sh',
  щ: 'sch',
  з: 'z',
  х: 'h',
  ъ: "'",
  Ф: 'F',
  Ы: 'I',
  В: 'V',
  А: 'a',
  П: 'P',
  Р: 'R',
  О: 'O',
  Л: 'L',
  Д: 'D',
  Ж: 'ZH',
  Э: 'E',
  ф: 'f',
  ы: 'i',
  в: 'v',
  а: 'a',
  п: 'p',
  р: 'r',
  о: 'o',
  л: 'l',
  д: 'd',
  ж: 'zh',
  э: 'e',
  Я: 'Ya',
  Ч: 'CH',
  С: 'S',
  М: 'M',
  И: 'I',
  Т: 'T',
  Ь: "'",
  Б: 'B',
  Ю: 'YU',
  я: 'ya',
  ч: 'ch',
  с: 's',
  м: 'm',
  и: 'i',
  т: 't',
  ь: "'",
  б: 'b',
  ю: 'yu',
};

function transliterate (slug) {
  return slug.split ('').map (char => letters[char] || char).join ('');
}

const toKebabCase = str => {
  return transliterate (str)
    .match (
      /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
    )
    .map (x => x.toLowerCase ())
    .join ('-');
};


// теги
const Tag = styled.span`
  margin-right: 0.6rem;
  margin-bottom: 0.6rem;
  
  /* Стили контейнера тега (ссылки внутри) */
  & a {
    display: inline-block; /* Чтобы padding и border-radius работали корректно */
    padding: 0.2em 0.6em;
    border-radius: 0.3em;
    background-color: #4d79af; 
    color: #e3eaf2;           
    text-decoration: none;
    font-family: "Source Sans Pro", Consolas, monospace;
    transition: background-color 0.2s ease; /* Плавный переход */
    
    /* Ховер эффект: фон темнее */
    &:hover {
      background-color: #3b608c; /* Чуть темнее #4d79af */
    }
  }

  /* для темной темы использовать селекторы body.dark-mode */
  /* body.dark-mode & a {
       background-color: #2c4a6e; 
     } 
  */
`;


// shows tags in a post, i.e. http://localhost:8000/tags/after
const Tags = ({tags}) => {
  return (
    <div className="authors">
      {tags &&
        tags.map (tag => {
          return (
            <Tag key={tag}>
              <Link to={`/tags/${toKebabCase (tag)}`}>{tag}</Link>
            </Tag>
          );
        })}
    </div>
  );
};



export default Tags;