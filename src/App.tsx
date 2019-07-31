import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import Router from './Router';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family:'AguafinaScript';
    src: url(${require('~/Assets/Fonts/AguafinaScript-Regular.ttf')});
  }
  body {
    font-family: 'AguafinaScript', sans-serif;
  }
`;

interface Props {}

const App = ({  }: Props) => {
  return  (
    <>
      <GlobalStyles />
      <Router />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));