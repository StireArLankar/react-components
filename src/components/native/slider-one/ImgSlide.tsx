import React, { Fragment } from "react";

import style from "./slider.module.scss";

export interface ImgSlideProps {
  url: string;
  text: string;
}

export const ImgSlide = (props: ImgSlideProps) => {
  return (
    <Fragment>
      <div className={style.imgWrapper}>
        <img src={props.url} alt="" className={style.img} />
      </div>
      <p className={style.text}>{props.text}</p>
    </Fragment>
  );
};

export default ImgSlide;
