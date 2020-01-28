import React from 'react';
import './reset.scss';
import './style.scss';

import Header from './component/Header';
import Container from './component/Container';

function App() {
  return (
    <div id="wrap">
        <Header />
        <Container />
    </div>
  );
}

export default App;
