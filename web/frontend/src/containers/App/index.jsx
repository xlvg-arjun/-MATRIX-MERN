import React from 'react';
import { hot } from 'react-hot-loader';

import SiteHeader from 'components/SiteHeader';
import SiteMain from 'components/SiteMain';
import SiteFooter from 'components/SiteFooter';

const App = () => (
  <div>
    <SiteHeader />
    <SiteMain />
    <SiteFooter />
  </div>
);

export default hot(module)(App);
