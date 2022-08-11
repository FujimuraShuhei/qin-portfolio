import React from 'react';
import styles from 'src/styles/mainVisual.module.css';
import { MdFacebook } from 'react-icons/md';
import { FaRss, FaTwitter } from 'react-icons/fa';

export const mainVisual = () => {
  return (
    <div className={styles.mainVisual_box}>
      <div className={styles.mainVisual_contents}>
        <div className={styles.mainVisual_content}>
          <h2>Shuhei University</h2>
          <p>しゅーへいのポートフォリオページです</p>
        </div>
        <ul>
          <li>
            <FaTwitter />
          </li>
          <li>
            <MdFacebook />
          </li>
          <li>
            <FaRss />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default mainVisual;
