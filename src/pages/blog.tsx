import { Button, Container, Loader } from '@mantine/core';
import styles from 'src/styles/Blog.module.css';
import React from 'react'

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
  {
    title: 'This is a header',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
    date: '2022.07.11',
  },
];

const blog:React.FC = () => {
  return (
    <section className='blog'>
      <Container size='lg' className='section_container'>
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
        <div className='flex justify-center items-center pt-6 pb-6'>
          <Loader color='pink' />
        </div>
      </Container>
    </section>
  );
}

export default blog;