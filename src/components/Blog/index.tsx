import { Button, Container } from '@mantine/core';
import Link from 'next/link';
import React from 'react';
import styles from 'src/styles/Blog.module.css';

const BLOG = [
  {
    id: 1,
    title: 'This is a header',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
    date: '2022.07.11',
  },
  {
    id: 2,
    title: 'This is a header',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
    date: '2022.07.11',
  },
  {
    id:3,
    title: 'This is a header',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
    date: '2022.07.11',
  },
  {
    id: 4,
    title: 'This is a header',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
    date: '2022.07.11',
  },
];

export const Blog: React.FC = () => {
  return (
    <section className='blog'>
      <Container size='lg' className='section_container'>
        <h2 className={styles.blog_h2}>Blog</h2>
        {BLOG.map((blog) => {
          return (
            <div key={blog.id}>
              <h3 className={styles.blog_title}>{blog.title}</h3>
              <p className={styles.blog_description}>{blog.description}</p>
              <p className={styles.blog_date}>{blog.date}</p>
            </div>
          );
        })}
        <Link href='/blog'>
          <a>
            <Button className={styles.blog_button} color='dark' radius='xl' size='md'>
              View All
            </Button>
          </a>
        </Link>
      </Container>
    </section>
  );
};
