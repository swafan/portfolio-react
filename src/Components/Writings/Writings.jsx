import React from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Writings.css";
import writings_data from "../../assets/writings_data";

const colors = [
  "#F5DFBB", "#99E2B4", "#F2542D", "#0E9594", "#F6AE2D"
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 30
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30
  }
};

const Writings = () => {
  const navigate = useNavigate();
  return (
    <div id='writings' className="writings">
      <div className="global-section-title-box">
          <h1 className="global-title writing-title">Writings</h1>
      </div>
      <div className="writings-carousel-wrapper">
        <Carousel
          responsive={responsive}
          partialVisible={true}
          infinite={false}
          draggable={true}
          swipeable={true}
          keyBoardControl={true}
          showDots={true}
          arrows={true}
          containerClass="writings-carousel"
          itemClass="writings-carousel-item"
        >
          {writings_data.map((item, i) => (
            <div
              className="writing-card-polaroid"
              key={i}
              data-bgcolor={colors[i % colors.length]}
              onClick={() => navigate(`/writings/${item.slug}`)}
              style={{ cursor: 'pointer' }}
            >
              <div
                className={
                  item.img
                    ? "writing-card-polaroid-photo"
                    : "writing-card-polaroid-photo writing-card-polaroid-photo-placeholder"
                }
                data-bgcolor={colors[i % colors.length]}
              >
                {item.img && (
                  <div
                    className="writing-card-polaroid-photo-inner"
                    style={{ backgroundImage: `url(${item.img})` }}
                  />
                )}
              </div>
              <div className="writing-card-polaroid-content">
                <h3>{item.title}</h3>
                <div className="writing-card-tags">{item.tags}</div>
                <div className="writing-card-time">{item.reading_time}</div>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Writings;