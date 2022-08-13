import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { MainVisual } from 'src/components/MainVisual';
import { Blog } from 'src/components/Blog';
import { Portfolio } from 'src/components/Portfolio';
import { Github } from 'src/components/Github';
import { Twitter } from 'src/components/Twitter';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>しゅーへいのポートフォリオ</title>
        <meta name='description' content='shuhei_portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MainVisual />
      <Blog />
      <Portfolio />
      <Github />
      <Twitter />
      
    </div>
  );
};

export default Home;
