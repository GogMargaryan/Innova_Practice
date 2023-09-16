import "./OurSpecialMenu.scss";
import MenuChangeButton from "./menu-change-buttton/MenuChangeButton";
import MenuAssortmant from "./menu-assortmant/MenuAssortmant";
const OurSpecialMenu = () => {

    return (
        <section className="menu">
            <div className="menu-inner">
                <div className="menu-inner-info">
                    <p>Fresh From Pizzon</p>
                    <h3>OUR SPECIAL MENU</h3>
                    <MenuChangeButton />
                </div>
                <MenuAssortmant />
            </div>
        </section>
    )
}

export default OurSpecialMenu;
