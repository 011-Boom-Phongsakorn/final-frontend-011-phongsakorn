import React from "react";
import perfume from "../assets/images/perfume-2.png";

const FeaturedBox = () => {
  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card"></div>
        <div className="featured-name">
          Scent of Happiness <span className="typedText"></span>
        </div>
        <div className="featured-text-info">
          <p>
            กลิ่นแห่งความสุข
            ที่เกิดจากความรักในการปรุงกลิ่นและมุ่งหวังให้เป็นส่วนหนึ่งในชีวิตที่สามารถส่งมอบความสุขให้แก่กันและกันได้อย่างง่ายๆของคนทุกระดับชั้นและฐานะ
            โดยการส่งมอบความสุขผ่านกลิ่นหอม
          </p>
        </div>
        <div className="featured-text-btn">
          <button className="btn">
            Button 1 <i className="uil uil-file-alt"></i>
          </button>
          <button className="btn">
            Button 2 <i className="uil uil-facebook"></i>
          </button>
        </div>
        <div className="social_icons">
          <div className="icon">
            <a href="https://www.instagram.com/se_npru">
              <i className="uil uil-instagram-alt"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://www.facebook.com/se_npru">
              <i className="uil uil-facebook"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://github.com/011-Boom-Phongsakorn">
              <i className="uil uil-github"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="featured-image">
        <div className="size-img">
          <img src={perfume} alt="perfume" />
        </div>
      </div>
      <div className="scroll-icon-box">
        <a href="#about" className="scroll-btn">
          <i className="uil uil-mouse-alt"></i>
          <p>Scroll Down</p>
        </a>
      </div>
    </section>
  );
};

export default FeaturedBox;
