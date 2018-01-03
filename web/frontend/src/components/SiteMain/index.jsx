import React from 'react';
import classNames from 'classnames';

import styles from './style.styl';

const SiteMain = () => (
  <main className={classNames(styles.siteMain, 'content')}>
    <h2 className={styles.welcomeSign}>Welcome!</h2>
    <article className={styles.mainArticle}>
      <p>Here you have a starting point for crafting a dockerized MERN stack application.</p>

      <p>For any queries, firstly consult the documentation. If you&apos;d like to improve this project template, do submit a PR. Alternatively, you could just fork the repositories on Github or Gitlab - and use however you&apos;d like.</p>

      <p>The code is released under the popular and permissive MIT license, so feel free to use it for just about... anything. :)</p>
    </article>
  </main>
);

export default SiteMain;
