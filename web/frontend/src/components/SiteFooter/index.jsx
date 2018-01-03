import React from 'react';
import { FaHeart } from 'react-icons/lib/fa';
import classNames from 'classnames';

import styles from './style.styl';

const SiteFooter = () => (
  <footer className={classNames(styles.siteFooter, 'content')}>
    <span>Crafted with <FaHeart size={20} color="aliceblue" /> by Arjun</span>
  </footer>
);

export default SiteFooter;
