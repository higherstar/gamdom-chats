import React, { FC, useEffect } from 'react';

// @ts-ignore
import io from 'socket.io-client';
import useStores from '../hooks/useStore'
import { IMsg } from '../resources/interfaces'

const socket = io('http://localhost:8080', { path: '/api/chat' });

const SocketProvider: FC = ({ children }) => {
  const { chatStore } = useStores()

  useEffect(() => {
    socket.emit('join', 'message');
    socket.on('user-msg', (data: any) => {
      chatStore.addMsg(data as IMsg)
    });
  }, [chatStore]);

  return <>{children}</>;
};

export default SocketProvider;
