import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Mainvisual } from 'src/components/Mainvisual';
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
      <Mainvisual />
      <Blog />
      <Portfolio />
      <Github />
      <Twitter />
    </div>
  );
};

export default Home;
