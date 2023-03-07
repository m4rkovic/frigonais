import React, { useEffect, useState } from "react";
import styles from "./Carousel.module.css";
import { images } from "./CarouselData";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Carousel = () => {
  const [currImg, setCurrImg] = useState(0);

  const changePic = () => {
    if (currImg > 0) {
      setCurrImg(currImg - 1);
    } else {
      setCurrImg(images.length - 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      changePic();
    }, 5000);
    return () => clearTimeout(timer);
  });

  return (
    <div className={styles["carousel"]}>
      <div
        className={styles["carouselInner"]}
        style={{ backgroundImage: `url(${images[currImg].img})` }}
      >
        <div
          className={styles["left"]}
          onClick={() => {
            changePic();

            // currImg > 0 && setCurrImg(currImg - 1);
          }}
        >
          <ArrowBackIosIcon />
        </div>
        <div className={styles["center"]}></div>
        <div
          className={styles["right"]}
          onClick={() => {
            if (currImg < images.length - 1) {
              setCurrImg(currImg + 1);
            } else {
              setCurrImg(0);
            }
            // currImg < images.length - 1 && setCurrImg(currImg + 1);
          }}
        >
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
