import React from 'react';
import { Route } from 'react-router-dom';

import Header from 'components/Header/Header';
import Home from 'containers/Home/Home';

const App = () => (
  <div>
    <Header />
    <Route exact path="/" component={Home} />
  </div>

);
export default App;
