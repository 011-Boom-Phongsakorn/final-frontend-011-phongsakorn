import React from "react";
import perfume from "../assets/images/perfume-2.png";

const Popular = () => {
  return (
    <>
      <section className="section" id="popular">
        <div className="container boxx">
          <div className="top-header">
            <h1>Popular</h1>
          </div>
          <div className="list-popular">
            <div className="center-popular">
              <div className="img-popular">
                <figure className="size-img-1">
                  <img src={perfume} alt="Shoes" />
                </figure>
              </div>
              <div className="card-body">
                <h2 className="card-title">Perfume</h2>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <div className="button-popular">
                  <p>$4</p>
                  <button className="btn btn-primary">🛒</button>
                </div>
              </div>
            </div>
            <div className="center-popular">
              <div className="img-popular">
                <figure className="size-img-1">
                  <img src={perfume} alt="Shoes" />
                </figure>
              </div>
              <div className="card-body">
                <h2 className="card-title">Perfume</h2>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <div className="button-popular">
                  <p>$4</p>
                  <button className="btn btn-primary">🛒</button>
                </div>
              </div>
            </div>
            <div className="center-popular">
              <div className="img-popular">
                <figure className="size-img-1">
                  <img src={perfume} alt="Shoes" />
                </figure>
              </div>
              <div className="card-body">
                <h2 className="card-title">Perfume</h2>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <div className="button-popular">
                  <p>$4</p>
                  <button className="btn btn-primary">🛒</button>
                </div>
              </div>
            </div>
            <div className="center-popular">
              <div className="img-popular">
                <figure className="size-img-1">
                  <img src={perfume} alt="Shoes" />
                </figure>
              </div>
              <div className="card-body">
                <h2 className="card-title">Perfume</h2>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <div className="button-popular">
                  <p>$4</p>
                  <button className="btn btn-primary">🛒</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Popular;
