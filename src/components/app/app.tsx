import { ListPage, LoginPage, NotFoundPage, ChatPage } from '@/pages';
import { Route, Routes } from 'react-router-dom';

import type { ReactElement } from 'react';

export default function App(): ReactElement {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/list" element={<ListPage />}>
        <Route path="chat" element={<ChatPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
