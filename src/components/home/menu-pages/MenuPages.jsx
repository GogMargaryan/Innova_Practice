import BasicBanner from "../../common/BasicBanner";
import banner from "../../../assets/images/MenuImages/menu-banner-1.png";
import AboutPizzon from "./about-pizzon/AboutPizzon";
import "./MenuPages.scss";
import OurStory from "./about-pizzon/our-story/OurStory";
import ModernCuisine from "./modern-cuisine/ModernCuisine";

const MenuPages = () => {
    return (
        <div>
            <BasicBanner title="ABOUT US" pageName="About us" backgroundImage={banner} />
            <AboutPizzon />
            <OurStory />
            <ModernCuisine />
        </div>
    )
}

export default MenuPages;