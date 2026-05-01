import { Outlet, useLoaderData } from 'react-router-dom';

import { Avatar } from '@components/avatar/avatar';
import { ChatsList } from '@components/chats-list/chat-list';

import logoutImage from '../../images/logout.svg';

import type { ChatInfo } from '@/types';
import type { /*ChangeEvent,*/ ReactElement } from 'react';

import styles from './list.module.css';

export const ListPage = (): ReactElement => {
  const { chats } = useLoaderData<{ chats: ChatInfo[] }>();

  // const [searchValue, setSearchValue] = useState('');

  // const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
  //   setSearchValue(e.target.value);
  // };

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <div className={styles.searchbar}>
          <Avatar name={'A'} />
          <div className={styles.link}>
            <img alt="logout" src={logoutImage} />
          </div>
        </div>
        <ChatsList chats={chats} />
      </div>
      <Outlet />
    </div>
  );
};
