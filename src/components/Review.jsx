import React from "react";
import person from "../assets/images/person-1.png";

const Review = () => {
  return (
    <>
      <section className="section" id="review">
        <div className="container">
          <div className="top-header">
            <h1>Customer Review</h1>
          </div>
          <div className="list-comments">
            <div className="box-review">
              <div className="text-review">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                  omnis voluptates accusamus harum reiciendis soluta?
                </p>
              </div>
              <div className="bottom-review">
                <div className="l-review">
                  <img src={person} alt="" />
                </div>
                <div className="r-review">
                  <h3>,,</h3>
                </div>
              </div>
            </div>
            <div className="box-review">
              <div className="text-review">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                  omnis voluptates accusamus harum reiciendis soluta?
                </p>
              </div>
              <div className="bottom-review">
                <div className="l-review">
                  <img src={person} alt="" />
                </div>
                <div className="r-review">
                  <h3>,,</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
