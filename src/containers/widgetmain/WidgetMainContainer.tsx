import {
  WeatherBackground,
  Template,
  TopBar,
  Feat,
  Search,
  Footer,
} from '../../components';

const WidgetMainContainer = () => {
  return (
    <Template>
      <WeatherBackground>
        <TopBar></TopBar>
        <Feat></Feat>
        <Search></Search>
        <Footer></Footer>
      </WeatherBackground>
    </Template>
  );
};

export default WidgetMainContainer;
