import React from 'react';
import { useState } from 'react';
import { Burger } from '@mantine/core';
import styles from 'src/styles/Header.module.css';
import { IconSun, IconMoonStars } from '@tabler/icons';

export const Header = () => {
  //ドロワーナビゲーション
  const [opened, setOpened] = useState(false);
  const title = opened ? 'Close navigation' : 'Open navigation';

  return (
    <header className={styles.header}>
      <Burger className="{styles.}" opened={opened} onClick={() => setOpened((o) => !o)} title={title} />
      <h1 className={styles.logo}>Shuhei Univercity</h1>
      <IconMoonStars className={styles.moonicon} />
    </header>
  );
};
