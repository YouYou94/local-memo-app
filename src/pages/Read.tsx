import { Outlet } from 'react-router-dom';
import { FlexColumnTemplate, Nav } from '../components';
import { useRecoilValue } from 'recoil';
import { getModeState } from '../recoil';

const Read = () => {
  const mode = useRecoilValue(getModeState);

  return (
    <FlexColumnTemplate mode={mode.toString()}>
      <Nav />
      <Outlet />
    </FlexColumnTemplate>
  );
};

export default Read;
