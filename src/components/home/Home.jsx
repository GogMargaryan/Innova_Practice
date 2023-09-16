import OurSpecialMenu from "./our-special-menu/OurSpecialMenu";
import Order from "../order/Order";
import LatestNews from "./latestNews/LatestNews";
import BestChefSlider from './bestChefSlider/BestChefSlider'
import SliderAnimations from "./sliderAnimations/SliderAnimations";
import Speciality from "./speciality/Speciality";
// import MenuPages from "./menu-pages/MenuPages";

const Home = () => {
  return <div>
    <SliderAnimations />
    <Order />
    <Speciality />
    <OurSpecialMenu />
    <BestChefSlider />
    <LatestNews />
  </div >
};

export default Home
