import { useRecoilValue } from 'recoil';
import { getModeState } from '../recoil';
import { Cover, FlexColumnTemplate, Nav } from '../components';

const Main = () => {
  const mode = useRecoilValue(getModeState);

  return (
    <FlexColumnTemplate mode={mode.toString()}>
      <Nav />
      <Cover />
    </FlexColumnTemplate>
  );
};

export default Main;
