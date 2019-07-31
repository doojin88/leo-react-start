import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Top from './Features/Top';

interface Props {}

const App = ({  }: Props) => {
  return <Top />;
};

ReactDOM.render(<App />, document.getElementById('app'));