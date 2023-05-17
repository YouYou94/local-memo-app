import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Main } from '../pages';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Navigate to="/off-line-memo-app" />} />
        <Route path="/off-line-memo-app" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};
