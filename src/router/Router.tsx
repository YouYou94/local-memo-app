import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { TopBar } from '../components/TopBar/TopBar';
import { Home, User } from '../pages';

const Router = () => {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/*" element={<Navigate to="/noteapp" />} />
        <Route path="/noteapp" element={<Home />} />
        <Route path="/noteapp/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
