import pageNotFound from '../../images/404.svg';

import type { ReactElement } from 'react';

import styles from './not-found.module.css';

export const NotFoundPage = (): ReactElement => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img alt="page not found" src={pageNotFound} />
        <br />
        <div className={styles.link}>Перейти в список чатов</div>
      </div>
    </div>
  );
};
