import pizzonImg from "../../menu-pages/images/about-1.jpg"
import AboutPizzonInfo from "./about-pizzon-info/AboutPizzonInfo"

const AboutPizzon = () => {
    return (
        <section className="about-pizzon">
            <div className="about-pizzon-inner">
                <img src={pizzonImg} alt="about-pizzon-img" />
                <AboutPizzonInfo />
            </div>
        </section>
    )
}

export default AboutPizzon