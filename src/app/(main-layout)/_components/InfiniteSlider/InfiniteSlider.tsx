"use client";
import React, { useEffect } from "react";
import style from "./InfiniteSlider.module.css";

const InfiniteSlider = () => {
  useEffect(() => {
    const slider = document.querySelector("#infinite-slider");
    if (slider) {
      const child = Array.from(slider?.children);
      child.forEach((element) => {
        const duplicate = element.cloneNode(true);
        slider.appendChild(duplicate);
      });
    }
  }, []);
  return (
    <div className={style.container}>
      <div className={style.slider} id="infinite-slider">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
        <p>10</p>
        <p>N</p>
        <p>U</p>
        <p>R</p>
        <p>U</p>
        <p>L</p>
      </div>
    </div>
  );
};

export default InfiniteSlider;
