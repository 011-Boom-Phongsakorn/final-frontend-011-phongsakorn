import React from "react";
import perfume from "../assets/images/perfume-2.png";

const AboutBox = () => {
  return (
    <section className="section" id="about">
      <div className="top-header">
        <h1>About Me</h1>
      </div>
      <div className="row">
        {/* About me */}
        <div className="col">
          <div className="size-img">
            <img src={perfume} alt="" />
          </div>
        </div>
        {/* skills */}
        <div className="col">
          <div className="skills-box">
            <div className="skills-header">
              <h3>Make Your Beauty</h3>
            </div>
            <div className="skills-list">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laboriosam pariatur, excepturi delectus atque nostrum provident
                fugiat ipsam ratione modi in eius incidunt sed. Assumenda
                architecto, aut temporibus atque, deserunt animi eos sed numquam
                nostrum possimus ullam asperiores, pariatur vitae quia at.
                Nesciunt autem asperiores quibusdam voluptate repellendus quas
                fugit adipisci.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="top-header">
        <h1></h1>
      </div>
      <div className="row">
        {/* About me */}
        <div className="col">
          <div className="skills-box">
            <div className="skills-header">
              <h3>Make Your Beauty</h3>
            </div>
            <div className="skills-list">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laboriosam pariatur, excepturi delectus atque nostrum provident
                fugiat ipsam ratione modi in eius incidunt sed. Assumenda
                architecto, aut temporibus atque, deserunt animi eos sed numquam
                nostrum possimus ullam asperiores, pariatur vitae quia at.
                Nesciunt autem asperiores quibusdam voluptate repellendus quas
                fugit adipisci.
              </p>
            </div>
          </div>
        </div>
        {/* skills */}
        <div className="col">
          <div className="size-img">
            <img src={perfume} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBox;
