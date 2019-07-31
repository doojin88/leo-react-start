import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import Title from '~/Components/Title';

interface Props extends RouteComponentProps {}

const Top = ({ match, history, location }: Props) => {
  console.log(match);
  console.log(history);
  console.log(location);
  return (
    <div>
      <Link to="/page1">Page 1</Link>
      <Link to="/page2">Page 2</Link>
      <Title label="Hello World!" />
      <img src={require('~/Assets/Images/logo.png')} />
      <img src={require('~/Assets/Images/ic_account.png')} />
      <img src={require('~/Assets/Images/ic_account.svg')} />
    </div>
  );
};

export default Top;