import React from "react";

export default ({ portfolioLinks }) => {
  return (
    <section id="products" className="products">
      <div className="container">
        <div className="section-title">
          <h3>Best Sellers</h3>
        </div>

        <div className="row content">
          {portfolioLinks &&
            portfolioLinks.map(({ title, caption, logo, price }, index) => (
              <div className="col-lg-3 col-md-3 mb-4">
                <div className="card h-100">
                  <img className="card-img-top" src={logo} alt="" />
                  <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <span className="card-p">{caption}</span>
                    <p className="card-text">BDT {price}</p>
                  </div>
                  <div className="card-footer">
                    <a href="#" className="btn btn-primary">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
