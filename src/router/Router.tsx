import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Read, Main, Memo, MemoList } from '../pages';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Navigate to="/local-memo-app" />} />
        <Route path="/local-memo-app" element={<Main />} />
        <Route path="/local-memo-app/memo" element={<Read />}>
          <Route path="" element={<MemoList />} />
          <Route path=":id" element={<Memo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
