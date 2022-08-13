import { Container } from '@mantine/core';
import React from 'react'
import styles from 'src/styles/Footer.module.css';

export const Footer = () => {
  return (
    <Container>
      <footer className={styles.footer}>
        <p>© ️2022 Shimabu IT University</p>
      </footer>
    </Container>
  );
}
