import { useRecoilValue } from 'recoil';
import { FlexColumnTemplate, Nav } from '../components';
import { getModeState } from '../recoil';

const Main = () => {
  const mode = useRecoilValue(getModeState);
  return (
    <FlexColumnTemplate mode={mode.toString()}>
      <Nav />
    </FlexColumnTemplate>
  );
};

export default Main;
