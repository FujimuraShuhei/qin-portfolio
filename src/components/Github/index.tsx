import { ActionIcon, Button, Container, List, Progress, Text } from '@mantine/core';
import React from 'react';
import styles from 'src/styles/Github.module.css';
import { FaRegStar } from 'react-icons/fa';
import { TbGitFork } from 'react-icons/tb';

interface GITHUB {
  title: string;
  description: string;
}

const GITHUB = [
  {
    title: 'lightsound/nexst-tailwind',
    description: 'Next.js starter template.',
  },
];

export const Github = () => {
  return (
    <section>
      <Container>
        <h2 className={styles.section_h2_title}>Github</h2>
        {GITHUB.map((github) => {
          return (
            <div className={styles.section_box}>
              <h3 className={styles.section_title_h3}>{github.title}</h3>
              <p className={styles.section_description}>{github.description}</p>
              <p className={styles.portfolio_date}></p>
              <div className={styles.reaction_box}>
                <div className={styles.star_icon}>
                  <ActionIcon size='lg'>
                    <FaRegStar className='mr-1' />
                  </ActionIcon>
                  <p>117</p>
                </div>
                <div className={styles.fork_icon}>
                  <ActionIcon size='lg'>
                    <TbGitFork className='mr-1' />
                  </ActionIcon>
                  <p>18</p>
                </div>
              </div>
              <Progress
                sections={[
                  { value: 65.5, color: '#3178C6' },
                  { value: 33.7, color: '#F1E05A' },
                  { value: 0.8, color: '#EDEDED' },
                ]}
              />
              <List className='flex mb-2'>
                <Text size='sm' weight={700}>
                  <List.Item>TypeScript</List.Item>
                </Text>
                <Text size='sm' weight={700}>
                  <List.Item>JavaScript</List.Item>
                </Text>
                <Text size='sm' weight={700}>
                  <List.Item>Other</List.Item>
                </Text>
              </List>
            </div>
          );
        })}
        <Button className={styles.section_button} color='dark' radius='xl' size='md'>
          View on Github
        </Button>
      </Container>
    </section>
  );
};
