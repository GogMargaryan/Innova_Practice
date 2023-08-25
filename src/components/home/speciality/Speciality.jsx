import React from "react";
import "./Speciality.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Speciality = () => {
  const speciality = useSelector((state) => {
    return state.speciality.speciality;
  });

  return (
    <section className="speciality">
      <div className="speciality-inner">
        <div className="speciality-inner-info">
          <p>Fresh From Pizzon</p>
          <h2>OUR SPECIALITY</h2>
        </div>
        <div className="speciality-inner-content">
          {speciality.map(({ id, image, title }) => (
            <div key={id} className="speciality-inner-content-pizzas">
              <Link>
                <img src={image} />
              </Link>
              <Link>
                <h2>{title}</h2>
              </Link>
            </div>
          ))}
        </div>
        <Link>
          <button>VIEW MORE</button>
        </Link>
      </div>
    </section>
  );
};

export default Speciality;
