import { Clock, Enrol, Template } from '../../components';

const COLUMN = 'column';

const HomeContainer = () => {
  return (
    <Template direction={COLUMN}>
      <Clock />
      <Enrol />
    </Template>
  );
};

export default HomeContainer;
