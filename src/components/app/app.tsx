import { ChatPage, ListPage, LoginPage, NotFoundPage } from '@/pages';
import { loader as chatLoader } from '@/services/utils';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import type { ReactElement } from 'react';


const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/list',
    element: <ListPage />,
    children: [
      {
        path: 'chat',
        element: <ChatPage />,
      },
    ],
    loader: chatLoader,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default function App(): ReactElement {
  return <RouterProvider router={router} />;
}