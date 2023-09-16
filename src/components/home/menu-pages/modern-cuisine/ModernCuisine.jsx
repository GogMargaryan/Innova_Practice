import experience from "../images/experience.jpg"
import ModernCuisineInfo from "./modern-cuisine-info/ModernCuisineInfo"

const ModernCuisine = () => {
    return (
        <section className="modern-cuisine">
            <div className="modern-cuisine-inner">
                <img src={experience} alt="moderm-cuisine-img" />
                <ModernCuisineInfo />
            </div>
        </section>
    )
}

export default ModernCuisine