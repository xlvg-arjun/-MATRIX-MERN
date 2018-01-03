import React from 'react';
import classNames from 'classnames';
import styles from './style.styl';

const SiteHeader = () => (
  <header className={classNames(styles.siteHeader, 'content')}>
    <h4>
      M.A.T.R.I.X. Boilerplate - MERN Edition
    </h4>
  </header>
);

export default SiteHeader;
