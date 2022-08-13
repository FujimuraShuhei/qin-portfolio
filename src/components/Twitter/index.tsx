import { Button, Container } from '@mantine/core';
import Link from 'next/link';
import React from 'react';
import styles from 'src/styles/Twitter.module.css';

const TWITTER = [
  {
    id: 1,
    user_name: 'しゅーへい',
    user_id: '@shushu308',
    date: '・5月25日',
    description:
      '📣 新サービス「Noway Form」をリリースしました！Noway Formは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogle FormsでやっていたことがNotionだけで完結します✌✨試しに使っていただけると幸いです😊',
    link: 'https://www.noway-form.com/ja',
  },
  {
    id: 2,
    user_name: 'しゅーへい',
    user_id: '@shushu308',
    date: '・5月25日',
    description:
      '📣 新サービス「Noway Form」をリリースしました！Noway Formは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogle FormsでやっていたことがNotionだけで完結します✌✨試しに使っていただけると幸いです😊',
    link: 'https://www.noway-form.com/ja',
  },
  {
    id: 3,
    user_name: 'しゅーへい',
    user_id: '@shushu308',
    date: '・5月25日',
    description:
      '📣 新サービス「Noway Form」をリリースしました！Noway Formは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogle FormsでやっていたことがNotionだけで完結します✌✨試しに使っていただけると幸いです😊',
    link: 'https://www.noway-form.com/ja',
  },
];

export const Twitter = () => {
  return (
    <section className='twitter'>
      <Container size='lg' className='section_container'>
        <h2 className={styles.section_h2_title}>Twitter</h2>
        {TWITTER.map((twitter) => {
          return (
            <div key={twitter.id} className='mt-10'>
              <div className='ml-14'>
                <div className='flex items-center mb-2'>
                  <h3 className={styles.section_title_h3}>{twitter.user_name}</h3>
                  <p className={styles.twitter_user_id}>{twitter.user_id}</p>
                  <p className={styles.twitter_date}>{twitter.date}</p>
                </div>
                <p className={styles.section_description}>{twitter.description}</p>
                <Link href={twitter.link}>
                  <a className={styles.twitter_link}>{twitter.link}</a>
                </Link>
              </div>
            </div>
          );
        })}
        <Button className={styles.section_button} color='dark' radius='xl' size='md'>
          View on Twitter
        </Button>
      </Container>
    </section>
  );
};
