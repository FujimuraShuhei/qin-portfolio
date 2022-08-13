import React from 'react';
import styles from 'src/styles/MainVisual.module.css';
import { MdFacebook } from 'react-icons/md';
import { FaRss, FaTwitter } from 'react-icons/fa';
import { Container } from '@mantine/core';

export const Mainvisual: React.FC = () => {
  return (
    <section className={styles.mainVisual_box}>
      <Container className={styles.mainVisual_container}>
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
      </Container>
    </section>
  );
};
