import React from "react";
import "./LatestNews.scss";
import { useSelector } from "react-redux";

const LatestNews = () => {
  const latestNews = useSelector((state) => {
    return state.latestNews.latestNews;
  });
  return (
    <section className="latestnews">
      <div className="latestnews-center">
        <div className="latestnews-center-title">
          <p className="latestnews-center-title-event">Recent Events</p>
          <h1 className="latestnews-center-title-news">LATEST NEWS</h1>
        </div>
        <div className="latestnews-center-content">
          {latestNews.map(({ id, image, title, link, day, nume, commnum }) => (
            <div key={id} className="latestnews-center-content-section">
              <div
                href={link}
                className="latestnews-center-content-section-img"
              >
                <div className="latestnews-center-content-section-img-inner">
                  <img src={image} alt="pizza" className="img" />
                  <div className="latestnews-center-content-section-day">
                    <p>{day}</p>
                  </div>
                </div>
              </div>
              <div className="latestnews-center-content-section-details">
                <div>
                  <span className="latestnews-center-content-section-details-comm">
                    by-{nume}
                  </span>
                  <span className="latestnews-center-content-section-details-comm">
                    {commnum} Comments
                  </span>
                </div>
                <a
                  href={link}
                  className="latestnews-center-content-section-details-title"
                >
                  {title}
                </a>
                <a
                  href={link}
                  className="latestnews-center-content-section-details-readmore"
                >
                  READ MORE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
