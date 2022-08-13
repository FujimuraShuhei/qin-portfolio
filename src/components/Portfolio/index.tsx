import { AspectRatio, Button, Container, Image } from '@mantine/core';
import React from 'react';
import styles from 'src/styles/Portfolio.module.css';

interface PORTFOLIO {
  title: string;
  description: string;
  date: string;
}

const PORTFOLIO = [
  {
    id: 1,
    title: 'IT KINGDOM',
    description:
      '当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。',
    date: '2021.1 - 2021.12',
  },
  {
    id: 2,
    title: 'IT KINGDOM',
    description:
      '当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。',
    date: '2021.1 - 2021.12',
  },
  {
    id: 3,
    title: 'IT KINGDOM',
    description:
      '当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。',
    date: '2021.1 - 2021.12',
  },
];

export const Portfolio = () => {
  return (
    <section className='portfolio'>
      <Container size='lg' className='portfolio_container'>
        <h2 className={styles.portfolio_h2}>Portfolio</h2>
        {PORTFOLIO.map((portfolio) => {
          return (
            <div key={portfolio.id} className={styles.portfolio_box}>
              <AspectRatio ratio={2 / 1}>
                <Image fit='contain' src='yakei01.jpg' alt='ポートフォリオコンテンツ' />
              </AspectRatio>
              <h3 className={styles.portfolio_title}>{portfolio.title}</h3>
              <p className={styles.portfolio_description}>{portfolio.description}</p>
              <p className={styles.portfolio_date}>{portfolio.date}</p>
            </div>
          );
        })}
        <Button className={styles.portfolio_button} color='dark' radius='xl' size='md'>
          View All
        </Button>
      </Container>
    </section>
  );
};
