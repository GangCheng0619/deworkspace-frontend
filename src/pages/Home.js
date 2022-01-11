import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const setResponsiveness = () => {
      if (window.innerWidth < 830) {
        document.getElementById("anim").style.display = "none";
      } else {
        document.getElementById("anim").style.display = "block";
      }
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  });
  return (
    <div>
      <div className="row x-feature-section">
        <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12 x-feature-section-title">
          <span className="x-font1-sec1-title">
            The <span className="x-font1-sec1-title-colored">Features </span>
            of Deworkspace
          </span>
          <span className="x-font1-sec1-text">
            We are creating products that combine cutting-edge technologies for
            a better
          </span>
          <div className="x-feature-section-title-btnline">
            <div className="x-feature-section-title-btn">
              <span className="x-font1-sec1-btn-text">Get started</span>
            </div>
          </div>
        </div>
        <img
          id="anim"
          src="/images/home-building.webp"
          alt="building"
          className="col-md-12 col-sm-12 col-xs-12 x-feature-section-animation"
        />
      </div>
      <div className="x-overview-section">
        <div className="x-overview-section-title">
          <span className="x-font1-sec2-title">
            Deworkspace
            <span className="x-font1-sec2-title-colored"> Overview</span>
          </span>
          <span>
            We use blockchain technology to create stake-of-the-art digital
            products
          </span>
        </div>
        <div className="x-overview-section-products">
          <div className="x-overview-section-productline">
            <div className="x-overview-section-productitem">
              <span className="x-font1-sec2-product">Crypto Currency</span>
            </div>
            <div className="x-overview-section-productitem">
              <span className="x-font1-sec2-product">Coin Ecosystem</span>
            </div>
            <div className="x-overview-section-productitem">
              <span className="x-font1-sec2-product">NFT Projects</span>
            </div>
          </div>
          <div>
            <img
              src="/images/stepper.webp"
              alt="stepper"
              className="x-overview-section-img"
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
