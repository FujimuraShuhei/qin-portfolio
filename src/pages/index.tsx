import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Header } from 'src/components/Header/Header';
import { mainVisual } from 'src/components/mainVisual/mainVisual';
import { MdFacebook } from 'react-icons/md';
import { FaTwitter, FaRss } from 'react-icons/fa';

const BLOG = [
  {
    title: 'This is a header',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
    date: '2022.07.11',
  },
  {
    title: 'This is a header',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
    date: '2022.07.11',
  },
  {
    title: 'This is a header',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
    date: '2022.07.11',
  },
  {
    title: 'This is a header',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
    date: '2022.07.11',
  },
];

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <section className={styles.mainVisual_box}>
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
      </section>
      <section className='blog'>
        <div className='container'>
          <div className={styles.container}></div>
          <h2 className={styles.blog_h2}>Blog</h2>
          {BLOG.map((blog) => {
            return (
              <div>
                <h3 className={styles.blog_title}>{blog.title}</h3>
                <p className={styles.blog_description}>{blog.description}</p>
                <p className={styles.blog_date}>{blog.date}</p>
              </div>
            );
          })}
          <button>View All</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
