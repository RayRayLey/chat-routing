import { normalizeData } from '@/services/api';
import React from 'react';

import { Avatar } from '@components/avatar/avatar';
import { getTimeFromTimestamp } from '@services/utils';

import type { ChatInfo } from '@/types';
import type { ReactElement } from 'react';

import styles from './chats-list.module.css';

type ChatsListProps = {
  chats: ChatInfo[];
};

export const ChatsList = ({ chats }: ChatsListProps): ReactElement => {
  const normalizedData = React.useMemo(() => normalizeData(chats), [chats]);
  return (
    <ul>
      {normalizedData.map(({ recipientName, timestamp, lastMessage }, index) => (
        <li key={index}>
          <div className={styles.chat}>
            <Avatar name={recipientName} />
            <div className={styles.chatContent}>
              <div className={styles.info}>
                <span>{recipientName}</span>
                <span>{getTimeFromTimestamp(timestamp)}</span>
              </div>
              <div className={styles.lastMessage}>
                <span>{lastMessage.text}</span>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
