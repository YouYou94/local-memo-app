import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Memo } from '../pages';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Navigate to="/off-line-memo-app" />} />
        <Route path="/off-line-memo-app/memo" element={<Memo />} />
      </Routes>
    </BrowserRouter>
  );
};
