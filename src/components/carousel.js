import { React, useState } from "react";
import { Carousel } from "react-bootstrap";

export function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel
        interval={3000}
        activeIndex={index}
        onSelect={handleSelect}
        fade
      >
        {props.image.map((images) => (
          <Carousel.Item key={images}>
            <img
              style={{ height: "40em" }}
              className="d-block w-100 "
              src={images}
              alt="Loading...."
            />
            <Carousel.Caption>
              <h1 className="bg-dark">Style is a choice Make Yours</h1>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
