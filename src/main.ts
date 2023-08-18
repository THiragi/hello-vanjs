import van from 'vanjs-core';

const { a, div, li, p, ul } = van.tags;

const Hello = () =>
  div(
    p('hello!'),
    ul(li('world'), li(a({ href: 'https://vanjs.org/' }, 'VanJS')))
  );

van.add(document.body, Hello());
